import React from 'react';
import treatment from '../../assets/images/treatment.png';

function OneService() {
  return (
    <div class="hero min-h-screen pt-10">
      <div class="hero-content flex-col lg:flex-row">
        <img width="458px" height="576px" src={treatment} class="max-w-sm rounded-lg shadow-2xl" />

        <div className='justify-center items-center pt-7 lg:pl-20'>
          <h1 class="text-5xl font-bold">あなたの条件で、卓越したデンタルケア</h1>
          <p class="py-6">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-#0FCFEC">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default OneService