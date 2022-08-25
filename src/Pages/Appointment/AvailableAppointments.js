import React from 'react';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

function AvailableAppointments({ date, setDate }) {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <div>
      <h3 className="text-center text-2xl font-bold text-secondary">利用可能サービス {format(date, 'PP')}</h3>
      <h5 className="text-center text-2xl text-accent pt-6">サービスを選択してください</h5>
      <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}></Service>)
        }

      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}></BookingModal>}
    </div>
  )
}

export default AvailableAppointments