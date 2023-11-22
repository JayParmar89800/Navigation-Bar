import React from 'react';
import companylogo from '../companylogo.jpeg';


function BusinessCard5() {
  return (
   <>
    <div className='container-fluid card-bg5 w-75 d-flex flex-column justify-content-evenly align-items-end text-black'>
                {/* <p className='fw-bold fs-4'>
                    J & D
                </p> */}
                <div className='border border-1 border-success p-1  shadow'>
                    <img src={companylogo} alt='logo not found' style={{height:120,width:120 }}/>
                    {/* <Avatar alt="D" src="/static/images/avatar/2.jpg" sx={{height:120,width:120 }} className='border border-1 ' /> */}
                </div>
                 <p className='fw-bold fs-4'>
                    J & D
                </p>
                <div className='d-flex flex-column row-gap-2 align-items-end'>
                <div className='d-flex column-gap-1 align-items-center'>
                    <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                    <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div style={{wordBreak: 'break-all'}} className='text-end'>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div>www.google.com</div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#ffffff',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#ffffff',padding:'3px 4px'}}></i></div>
                        </div>
                        </div>
        </div>
   </>
  )
}

export default BusinessCard5
