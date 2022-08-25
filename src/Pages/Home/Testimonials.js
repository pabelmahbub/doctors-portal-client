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
                                                            review:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
                                                            img:people1
                              },
                              {
                                                            _id:2,
                                                            name:'Ms. Nakamura',
                                                            location:'Gunma, Japan',
                                                            review:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
                                                            img:people2
                              },
                              {
                                                            _id:3,
                                                            name:'Ms.Kitajima',
                                                            location:'Niigata, Japan',
                                                            review:'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
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