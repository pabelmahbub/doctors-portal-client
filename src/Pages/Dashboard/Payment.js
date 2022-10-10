import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IEOIEE7axL2bab7XPhMMh9Ukg5HW3vvzcxI7U9g1RhlUZJIQCVYg2xPRC1UrCicqWsDD6h0gpH2kl7OoCC6SGg6006U98gNP5');

function Payment() {
        const{id}= useParams();
        const url = `http://localhost:5000/booking/${id}`;

        const{data:appointment, isLoading}= useQuery('booking', ()=> fetch(url,{
                              method:'GET',
                              headers:{
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                              }
                            })
                            .then(res=>res.json()));

     if(isLoading){
        return <Loading></Loading>
        }
  return (
    <div>
<p>{appointment.price}</p>

<div className="card w-96 bg-base-100 shadow-xl my-5 mx-5">
  <div className="card-body">
    <h1 className="card-title text-success">Hello, {appointment.patientName}</h1>
    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
    <h3 className="card-title">Payment subtotal is: ¥{appointment.price}</h3>
    <p>Your appointemt is in <span className='text-success'>{appointment.date}</span> at <span className='text-success'>{appointment.slot}</span></p>

  </div>
</div>



<div className="card w-96 bg-base-100 shadow-xl mb-3 mx-5">
  <div className="card-body">
  <Elements stripe={stripePromise}>
    <CheckoutForm appointment={appointment}/>
  </Elements>
  </div>
</div>


    </div>
  )
}

export default Payment

/*steps of react payment:
1.react stripe.js install.[in frontend]
2.Open stripe acc in stripe and get developer publishable api
3.create a Elements wrapper using publishable key.
4. Create checkout form using card element from stripe github docs.[https://github.com/stripe/react-stripe-js]
5.Get card elements,functionality in code.
6.Use stripe test cards in google
7.display error in UI
----
8.in backend [get client secret from backend via payment intent post api]




*/
