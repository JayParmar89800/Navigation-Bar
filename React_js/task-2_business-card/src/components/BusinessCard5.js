import React from 'react';
import companylogo from '../default_user.png';
import PropTypes from "prop-types";


function BusinessCard5(formData) {
  return (
   <>
        <div className='container-fluid card-bg card-bg5 w-75 d-flex flex-column justify-content-evenly text-black '>
            <div className='d-flex flex-column justify-content-evenly align-items-end'>
                <div>
                    <img src={formData.CompanyLogo?formData.CompanyLogo:companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid object-fit-cover' style={{height:'130px',width:'130px'}}/>
                </div>
                <p className='fw-bold fs-4'>{formData.companyName}</p>
                <div className='d-flex flex-column row-gap-2 align-items-end'>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div><span className='fw-bold'>+91</span> {formData.contactNumber}</div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div style={{wordBreak: 'break-all'}} className='text-end'>{formData.companyAddress}</div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div>{formData.websiteName}</div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center'>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#ffffff',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#ffd14d',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#ffffff',padding:'3px 4px'}}></i></div>
                        </div>
                </div>
            </div>
            <div className='text-center fw-bold fst-italic' style={{color:'#ffd14d',borderTop:"1px solid #ffd14d"}}>
                    " {formData.TagLine} "
            </div>
        </div>
   </>
  )
}

export default BusinessCard5;
BusinessCard5.propTypes = {
    companyName: PropTypes.string,
    contactNumber: PropTypes.number,
    companyAddress: PropTypes.string,
    websiteName: PropTypes.string,
    TagLine:PropTypes.string


};
BusinessCard5.defaultProps = {
    companyName:"Company Name",
    contactNumber:"123 4567 890",
    companyAddress:"47 Anytown Road Chennai Tamil Nadu 600 002 India",
    websiteName:"www.xyx.com",
    TagLine:"A good beginning makes a good end."
};
