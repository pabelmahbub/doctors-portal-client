import React from 'react'
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

function Services() {
           const services=[{
                              _id:1,
                              name:'フロライド処理',
                              description:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
                              img:fluoride,
},
{
                              _id:1,
                              name:'虫歯治療',
                              description:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
                              img:cavity,
},
{
                              _id:1,
                              name:'歯根管',
                              description:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
                              img:whitening,
}]
  return (
  <div class="mt-20">
                              <div className='text-center'>
                              <p class="text-xl font-bold uppercase text-secondary">私たちのサービス</p>
                              <h1 class="text-4xl mt-4">私たちが提供するサービス</h1>
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