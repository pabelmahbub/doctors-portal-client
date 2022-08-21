import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

function Testimonials() {
                              const reviews=[{
                                                            _id:1,
                                                            name:'Mr.Takahashi',
                                                            location:'Tokyo, Japan',
                                                            review:'Consectetur deserunt consectetur minim ex qui sint duis commodo pariatur tempor aliqua id ut eiusmod. Non consectetur non laborum id irure laboris. Dolor culpa nulla mollit est consectetur dolore ad commodo est voluptate fugiat laborum deserunt eu. Dolore commodo sint sit fugiat commodo et eiusmod enim do aliquip enim.',
                                                            img:people1
                              },
                              {
                                                            _id:2,
                                                            name:'Ms. Nakamura',
                                                            location:'Gunma, Japan',
                                                            review:'Cillum duis deserunt ad nostrud fugiat sit consectetur eu. Non sint pariatur elit magna officia sint exercitation qui cillum est amet eu nulla. Sunt nulla do qui est. Lorem minim ipsum officia qui exercitation dolore fugiat dolore sit ipsum esse non. Magna esse sit est non commodo. Do sunt mollit amet nulla laboris voluptate sunt ea. Pariatur elit sint nostrud id veniam laboris.',
                                                            img:people2
                              },
                              {
                                                            _id:3,
                                                            name:'Ms.Kitajima',
                                                            location:'Niigata, Japan',
                                                            review:'Id nostrud elit ea tempor ipsum nostrud officia sint reprehenderit labore ad eu adipisicing Lorem. Deserunt proident esse culpa eu ad magna quis velit quis commodo minim enim anim ea. Velit dolore aliqua nostrud id. Aliquip ipsum non fugiat mollit proident consectetur ad irure reprehenderit consectetur. Anim dolor non ipsum enim consequat incididunt tempor. Nisi mollit nulla magna ullamco ad in.',
                                                            img:people3
                              },]
  return (
   <section className='py-20 px-12'>
                   <div className='flex justify-between'>
                              <div>
                                   <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                                   <h2 className='text-3xl'>What our patients say</h2>
                              </div>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid'>
                                    <img src={quote} className='lg:w-36 w-24'></img>
                              </div>
                     </div>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                                            {
                                                                                          reviews.map(review=><Review
                                                                                          key={review._id}
                                                                                          review={review}></Review>)
                                                            }
                              </div>
   </section>
  )
}

export default Testimonials