import React from 'react';
import companylogo from '../companylogo.jpeg';

function BusinessCard2() {
  return (
    <>
         <div className='container-fluid card-bg2 border'>
                <div className='row h-100'>
                    <div className='col-6 d-flex flex-column justify-content-evenly text-white'>
                    <p className='fw-bold fs-4'>
                            J & D
                        </p>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#f7a51d',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div style={{wordBreak: 'break-all'}}>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div>www.google.com</div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#f7a51d',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#f7a51d',padding:'3px 4px'}}></i></div>
                        </div>
                    </div>  
                    <div className='col-6 d-flex flex-column align-items-end justify-content-center row-gap-3'>
                        <div className='d-flex align-items-center'>
                        <img src={companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid' style={{minHeight:'20px',maxHeight:'80%'}}/>
                        </div>
                    </div>            
                </div>
        </div>
    
    </>
  )
}

export default BusinessCard2
