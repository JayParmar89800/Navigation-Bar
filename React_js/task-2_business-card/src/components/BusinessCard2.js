import React from 'react';
import companylogo from '../default_user.png';
import PropTypes from "prop-types";

function BusinessCard2(formData) {
  return (
    <>
         <div className='container-fluid card-bg card-bg2 border d-flex flex-column justify-content-evenly'>
                <div className='row h-100'>
                    <div className='col-6 d-flex flex-column justify-content-evenly text-white'>
                        <p className='fw-bold fs-4'>
                            {formData.companyName}
                        </p>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#f7a51d',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div><span className='fw-bold'>+91</span> {formData.contactNumber}</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div style={{wordBreak: 'break-all'}}>{formData.companyAddress}</div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div>{formData.websiteName}</div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#f7a51d',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#f7a51d',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffffff',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#f7a51d',padding:'3px 4px'}}></i></div>
                        </div>
                    </div>  
                    <div className='col-6 d-flex flex-column align-items-end justify-content-center row-gap-3'>
                        <div className='d-flex align-items-center'>
                        <img src={formData.CompanyLogo?formData.CompanyLogo:companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid object-fit-cover' style={{height:'130px',width:'130px'}}/>
                        </div>
                    </div>            
                </div>
                <div className='text-center text-danger fw-bold fst-italic border-top border-danger'>
                    " {formData.TagLine} "
                </div>
        </div>
    
    </>
  )
}

export default BusinessCard2;

BusinessCard2.propTypes = {
    companyName: PropTypes.string,
    contactNumber: PropTypes.number,
    companyAddress: PropTypes.string,
    websiteName: PropTypes.string,
    CompanyLogo:PropTypes.string,
    TagLine:PropTypes.string
};
BusinessCard2.defaultProps = {
    companyName:"Company Name",
    contactNumber:"123 4567 890",
    companyAddress:"47 Anytown Road Chennai Tamil Nadu 600 002 India",
    websiteName:"www.xyx.com",
    CompanyLogo:companylogo,
    TagLine:"A good beginning makes a good end."
};
