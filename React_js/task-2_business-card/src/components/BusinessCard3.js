import React from 'react';
import companylogo from '../companylogo.jpeg';

function BusinessCard3() {
  return (
    <>
     <div className='container-fluid card-bg3 w-75 d-flex flex-column justify-content-evenly align-items-center text-white row-gap-3'>
                <p className='display-6 fw-bold mb-0'>
                    J & D
                </p>
                
                <img src={companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid' style={{minHeight:'100px',maxHeight:'150px'}}/>

                    {/* <Avatar alt="D" src="/static/images/avatar/2.jpg" sx={{height:120,width:120 }} className='border border-1 rounded-circle ' /> */}
                <div className='d-flex flex-column row-gap-2'>
                <div className='d-flex column-gap-1 align-items-center'>
                    <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#000000',borderRadius:'50%',padding:'3px'}}></i></div>
                    <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#000000',padding:'3px'}}></i></div>
                            <div style={{wordBreak: 'break-all'}}>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#000000',padding:'3px'}}></i></div>
                            <div>www.google.com</div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#000000',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#000000',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#000000',padding:'3px 4px'}}></i></div>
                        </div>
                        </div>
            </div></>
  )
}

export default BusinessCard3
