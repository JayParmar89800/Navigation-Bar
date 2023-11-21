import React from 'react';
import Avatar from '@mui/material/Avatar';

function Mainpage() {
  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-4'>
            <div className='container-fluid card-bg1 border'>
                <div className='row h-100'>
                    <div className='col-6 d-flex flex-column align-items-center justify-content-center row-gap-3'>
                        <div className='border border-1 border-primary-subtle p-1 rounded-circle shadow'>
                        <Avatar alt="D" src="/static/images/avatar/2.jpg" sx={{height:80,width:80 }} className='border border-1 rounded-circle ' />
                        </div>
                        <p className='fw-bold'>
                            J & D
                        </p>
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-end align-items-end'>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i class="fa-solid fa-phone" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div style={{wordBreak: 'break-all'}}>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i class="fa-solid fa-location-dot" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div>www.google.com</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i class="fa-solid fa-earth-americas" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i class="fa-brands fa-twitter" style={{color: '#ffffff',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i class="fa-brands fa-linkedin" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i class="fa-brands fa-facebook-f" style={{color: '#ffffff',padding:'3px 4px'}}></i></div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
        <div className='col-4'>
        <div className='container-fluid card-bg2 border'>
                <div className='row h-100'>
                    
                    <div className='col-6 d-flex flex-column justify-content-evenly text-white'>
                    <p className='fw-bold fs-4'>
                            J & D
                        </p>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-solid fa-phone" style={{color: '#f7a51d',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-solid fa-location-dot" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div style={{wordBreak: 'break-all'}}>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-solid fa-earth-americas" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div>www.google.com</div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-brands fa-twitter" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-brands fa-linkedin" style={{color: '#f7a51d',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-brands fa-facebook-f" style={{color: '#f7a51d',padding:'3px 4px'}}></i></div>
                        </div>
                    </div>  
                    <div className='col-6 d-flex flex-column align-items-end justify-content-center row-gap-3'>
                        <div className='rounded-circle shadow' style={{border:'1rem solid #f7a51d'}} >
                        <Avatar alt="D" src="../public/img/business_card_bg2.png" sx={{height:130,width:130 }} className='border border-1 rounded-circle ' />
                        </div>
                    </div>            
                </div>
            </div>
        </div>
        <div className='col-4'>
            <div className='container-fluid card-bg3 w-75 d-flex flex-column justify-content-evenly align-items-center text-white'>
                <p className='fw-bold fs-4'>
                    J & D
                </p>
                <div className='border border-1 border-primary p-1 rounded-circle shadow'>
                    <Avatar alt="D" src="/static/images/avatar/2.jpg" sx={{height:120,width:120 }} className='border border-1 rounded-circle ' />
                </div>
                <div className='d-flex flex-column row-gap-1'>
                <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-solid fa-phone" style={{color: '#0d6efd',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div><span className='fw-bold'>+91</span> 123 45 6789</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-solid fa-location-dot" style={{color: '#0d6efd',padding:'3px'}}></i></div>
                            <div style={{wordBreak: 'break-all'}}>S V Rd, Opp Dcb Bank, Junagadh 362001</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-solid fa-earth-americas" style={{color: '#0d6efd',padding:'3px'}}></i></div>
                            <div>www.google.com</div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-brands fa-twitter" style={{color: '#0d6efd',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-brands fa-linkedin" style={{color: '#0d6efd',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i class="fa-brands fa-facebook-f" style={{color: '#0d6efd',padding:'3px 4px'}}></i></div>
                        </div>
                        </div>
            </div>
        </div>
        <div className='col-4'>

        </div>
        <div className='col-4'>

        </div>
        
      </div>
    </div>
  )
}

export default Mainpage
