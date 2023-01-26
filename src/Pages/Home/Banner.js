import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import Primarybutton from '../Shared/Primarybutton';
import CountUp from 'react-countup';
import { Image, Shimmer } from 'react-shimmer'

function Banner() {
  return (
    <div style={{ background: `url(${bg})` }}>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img width="594px" height="355px" src={chair} alt="Shoes" class="rounded-xl" fallback={<Shimmer width={800} height={600} />}/>
        {/* <img width="800px" height="400px" src={chair} class="max-w-sm rounded-lg shadow-2xl" />  */}
          <div>
          <div className='mb-8'>
            <h1 class="text-5xl font-bold">あなたの新しい笑顔はここから始まります!!!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           
            {/* <CountUp delay={4} end={880} /> */}
            <span className='text-3xl font-bold text-secondary'><CountUp
                start={0}
                end={1652}
                duration={2.75}
                separator=","
                decimal=","
                prefix="満足した患者数:"
                suffix="人"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
              ></CountUp></span>
              </div>
            <Primarybutton>Get Started</Primarybutton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner