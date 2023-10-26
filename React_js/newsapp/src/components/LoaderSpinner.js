import React, { Component } from 'react'
import loader from './loader.gif';

export class LoaderSpinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={loader} alt='Loading' style={{mixBlendMode:'multiply'}} height={'150px'}/>
      </div>
    )
  }
}

export default LoaderSpinner
