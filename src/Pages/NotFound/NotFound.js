import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Primarybutton from '../Shared/Primarybutton';

function NotFound() {
  return (
    <div>
      <div className='flex justify-center text-center items-center py-12'>
        <img style={{ height: 420, width: 1000 }} src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png"></img>
      </div>

      <div className='flex justify-center text-center items-center px-48 pb-35'>
        <Link to='/'><Primarybutton>Back to Home</Primarybutton></Link>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default NotFound