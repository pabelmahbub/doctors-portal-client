import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({appointment}) => {
                  const {price, patient, patientName} = appointment;
                  const [cardError, setCardError] = useState('');
                  const [success, setSuccess] = useState('');
                  const [clientSecret, setClientSecret] = useState('');

                 const stripe = useStripe();
                 const elements = useElements();

                 const handleSubmit = async (event) => {
                 event.preventDefault();
                    if (elements == null) {
                         return;
                     }

                 const {error, paymentMethod} = await stripe.createPaymentMethod({
                        type: 'card',
                        card: elements.getElement(CardElement),
                        });

                        if(error){
                              setCardError(error?.message);
                              setSuccess('');
                        }
                        else{
                              setCardError('');
                        }
                        //confirm card payment:
                        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
                          clientSecret,
                          {
                            payment_method: {
                              card:CardElement,
                              billing_details:{
                                name:patientName,
                                email: patient
                              }
                            },
                          }
                        );
                        if (intentError) {
                          setCardError(intentError?.message);
                          success('');
                        }
                        else{
                          setCardError('');
                          console.log(paymentIntent);
                          setSuccess('Your payment is completed!');
                        }
                   };

    useEffect( ()=>{
       fetch('http://localhost:5000/create-payment-intent',{
         method:'POST',
         headers:{
           'content-type':'application/json',
           authorization:`Bearer ${localStorage.getItem('accessToken')}`
         },
         body:JSON.stringify({price})
       })
       .then(res=>res.json())
       .then(data =>{
               if(data?.clientSecret){
                 setClientSecret(data.clientSecret);
               }
             });

    },[price])


                    return (
                               <>
                                <form onSubmit={handleSubmit}>
                                  <CardElement />
                                  <button className='btn btn-sm btn-success mt-5 px-5' type="submit" disabled={!stripe || !elements || clientSecret}>
                                    Pay
                                  </button>
                                </form>
                                {
                                    cardError && <p className='text-red-600'>{cardError}</p>
                                }
                                {
                                    success && <p className='text-green-600'>{success}</p>
                                }
                                </>
                              );
                            };

export default CheckoutForm
