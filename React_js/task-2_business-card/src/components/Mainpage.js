import React from 'react';
import BusinessCard1 from './BusinessCard1';
import BusinessCard2 from './BusinessCard2';
import BusinessCard3 from './BusinessCard3';
import BusinessCard4 from './BusinessCard4';
import BusinessCard5 from './BusinessCard5';
function Mainpage() {
  return (
    <div className='container'>
      <div className='row my-4 row-gap-5'>
        <div className='col-md-6 col-lg-4 col-12'>
            <BusinessCard1/>
        </div>
        <div className='col-md-6 col-lg-4 col-12'>
            <BusinessCard2/>
        </div>
        <div className='col-md-6 col-lg-4 col-12'>
            <BusinessCard3/>
        </div>
        <div className='col-md-6 col-lg-4 col-12'>
            <BusinessCard4/>
        </div>
        <div className='col-md-6 col-lg-4 col-12'>
            <BusinessCard5/>
        </div>
     
        
      </div>
    </div>
  )
}

export default Mainpage
