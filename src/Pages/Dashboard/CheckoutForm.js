import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
                  const [cardError, setCardError] = useState('')
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

                              
                            
                    return (
                               <>
                                <form onSubmit={handleSubmit}>
                                  <CardElement />
                                  <button className='btn btn-sm btn-success mt-5 px-5' type="submit" disabled={!stripe || !elements}>
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