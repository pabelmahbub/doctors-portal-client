import React from 'react';
import treatment from '../../assets/images/treatment.png';

function OneService() {
  return (
                              <div class="hero min-h-screen pt-10">
                              <div class="hero-content flex-col lg:flex-row">
                                <img width="458px" height="576px" src={treatment} class="max-w-sm rounded-lg shadow-2xl" />

                                <div className='justify-center items-center pt-7 lg:pl-20'>
                                  <h1 class="text-5xl font-bold">Exceptional Dental care, on Your Terms</h1>
                                  <p class="py-6">Lorem. Duis sit laboris ex nostrud mollit dolor consequat ea voluptate nulla id laboris. Ut do aliquip ullamco consequat. Labore laborum amet consequat voluptate culpa in.Minim officia incididunt non eiusmod. Nulla adipisicing sunt adipisicing esse velit aliqua aute occaecat culpa. Elit nulla do aute tempor esse ipsum eu nisi eu non dolore excepteur officia dolore. Eiusmod qui amet nulla velit deserunt adipisicing occaecat elit voluptate proident amet. Sit ipsum laborum do esse.</p>
                                  <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-#0FCFEC">Get Started</button>
                                </div>
                              </div>
                            </div>
  )
}

export default OneService