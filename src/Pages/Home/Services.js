import React from 'react'
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

function Services() {
           const services=[{
                              _id:1,
                              name:'Floride treatment',
                              description:'Nostrud aliqua officia aliquip ullamco velit nisi occaecat sint. Tempor id duis minim quis sint. Nostrud ad ipsum culpa quis. Laborum ut excepteur minim magna officia.',
                              img:fluoride,
},
{
                              _id:1,
                              name:'Floride treatment',
                              description:'Nostrud aliqua officia aliquip ullamco velit nisi occaecat sint. Tempor id duis minim quis sint. Nostrud ad ipsum culpa quis. Laborum ut excepteur minim magna officia.',
                              img:cavity,
},
{
                              _id:1,
                              name:'Floride treatment',
                              description:'Nostrud aliqua officia aliquip ullamco velit nisi occaecat sint. Tempor id duis minim quis sint. Nostrud ad ipsum culpa quis. Laborum ut excepteur minim magna officia.',
                              img:whitening,
}]
  return (
  <div class="mt-20">
                              <div className='text-center'>
                              <p class="text-xl font-bold uppercase text-secondary">Our services</p>
                              <h1 class="text-4xl mt-4">Services we provide</h1>
                               </div>

                              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-10'>
                               
                                                            {
                                                                      services.map(service=><Service
                                                                      key={service._id}
                                                                      service={service}></Service>)                     
                                                            }
                                                                                         
                              </div>
                              
                            
    </div>
  )
}

export default Services;