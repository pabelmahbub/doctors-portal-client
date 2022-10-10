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
                  const {price} = appointment;
                  const [cardError, setCardError] = useState('');
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
                        }
                        else{
                              setCardError('');
                        }
                   };

    useEffect( ()=>{
       fetch('https://doctors-100.herokuapp.com/create-payment-intent',{
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
                                </>
                              );
                            };

export default CheckoutForm
