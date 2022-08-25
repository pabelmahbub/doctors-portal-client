import React from 'react'
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

function Info() {
                              const title1='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
                              const title2='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
                              const title3='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                              <InfoCard img={clock} title={title1} bgClass= 'bg-gradient-to-r from-secondary to-primary'></InfoCard>
                              <InfoCard img={marker} title={title2} bgClass= "bg-[#3A4256]"></InfoCard>
                              <InfoCard img={phone} title={title3} bgClass= 'bg-gradient-to-r from-secondary to-primary'></InfoCard>
    </div>
  )
}

export default Info