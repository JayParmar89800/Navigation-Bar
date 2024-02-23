import React from 'react'
import loader from './loader.gif';

const LoaderSpinner=()=>{
 
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={loader} alt='Loading' style={{mixBlendMode:'multiply'}} height={'150px'}/>
      </div>
    )
  
}

export default LoaderSpinner
