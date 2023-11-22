import React from 'react';
import companylogo from '../companylogo.jpeg';


function BusinessCard1() {
  return (
    <>
       <div className='container-fluid card-bg1 border'>
                <div className='row'>
                    <div className='col-6 d-flex flex-column align-items-center justify-content-center'> 
                        <div className='d-flex align-items-center'>
                            <img src={companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid' style={{minHeight:'20px',maxHeight:'80%'}}/>
                        </div>
                        <div className='w-100'>
                        <p className='fw-bold display-6 mb-0 text-white'>
                            J & D
                        </p>
                        </div>
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-end align-items-end'>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div style={{wordBreak: 'break-all'}}>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div>www.google.com</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'10px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#ffffff',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#ffffff',padding:'3px 4px'}}></i></div>
                        </div>
                    </div>              
                </div>
            </div>
    </>
  )
}

export default BusinessCard1
