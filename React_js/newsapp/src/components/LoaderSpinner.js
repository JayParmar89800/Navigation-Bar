import React, { Component } from 'react'
import loader from './loader.gif';

export class LoaderSpinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt='Loading' style={{mixBlendMode:'multiply'}}/>
      </div>
    )
  }
}

export default LoaderSpinner
