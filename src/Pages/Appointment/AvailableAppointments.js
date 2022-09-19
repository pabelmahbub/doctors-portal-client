import React from 'react';
import { useState, useEffect } from 'react';
import { format, formattedDate } from 'date-fns';
import Service from './Service';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Services from '../Home/Services';
import Loading from '../Shared/Loading';

function AvailableAppointments({ date}) {
  //const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, 'PP');
  const { isLoading, data:services, refetch ,staleTime=(10)} = useQuery(['available', formattedDate], () =>
  fetch(`https://doctors-100.herokuapp.com/available?date=${formattedDate}`)

    .then(res =>
    res.json()
  ),

)

if(isLoading){
  return <Loading></Loading>
}

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data));
  // }, [formattedDate])

  return (
    <div>
      <h3 className="text-center text-2xl font-bold text-secondary">利用可能サービス {format(date, 'PP')}</h3>
      <h5 className="text-center text-2xl text-accent pt-6">サービスを選択してください</h5>
      <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          services?.map(service => <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}></Service>)
        }

      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}
        refetch={refetch}
        ></BookingModal>}
    </div>
  )
}

export default AvailableAppointments
