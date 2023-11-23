import React from 'react';
import companylogo from '../default_user.png';
import PropTypes from "prop-types";


function BusinessCard4(formData) {
  return (
    <>
     <div className='container-fluid pt-5 card-bg card-bg4 w-75 d-flex flex-column justify-content-center text-white '>   
            <div className='d-flex flex-column bg-white text-black row-gap-1 position-relative inner_card' style={{paddingTop:'5rem'}}>
                <div className='d-flex flex-column align-items-center position-absolute start-50 end-50 text-black' style={{top:'-4rem'}} >
                <img src={formData.CompanyLogo?formData.CompanyLogo:companylogo} alt='logo not found' className='border border-1 rounded-circle' style={{height:'130px',width:'130px'}}/>
                </div>
                <p className='fw-bold fs-4 text-center'>
                {formData.companyName}
                </p>
                <div className='px-3 d-flex flex-column row-gap-2'>
                <div className='d-flex column-gap-1 align-items-center' style={{borderBottom:'2px dotted black'}}>
                    <div className='rounded-circle' > <i className="fa-solid fa-phone" style={{color: '#000000',borderRadius:'50%',padding:'3px'}}></i></div>
                    <div><span className='fw-bold'>+91</span> {formData.contactNumber}</div>
                </div>
                    <div className='d-flex column-gap-1 align-items-center'  style={{borderBottom:'2px dotted black'}}>
                        <div className='rounded-circle'> <i className="fa-solid fa-location-dot" style={{color: '#000000',padding:'3px'}}></i></div>
                        <div style={{wordBreak: 'break-all'}}>{formData.companyAddress}</div>
                    </div>
                    <div className='d-flex column-gap-1 align-items-center mb-1'  style={{borderBottom:'2px dotted black'}}>
                        <div className='rounded-circle'> <i className="fa-solid fa-earth-americas" style={{color: '#000000',padding:'3px'}}></i></div>
                        <div>{formData.websiteName}</div>
                    </div>
                    <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'20px'}}>
                        <div className='rounded-circle'> <i className="fa-brands fa-twitter" style={{color: '#000000',padding:'3px'}}></i></div>
                        <div className='rounded-circle'> <i className="fa-brands fa-linkedin" style={{color: '#000000',borderRadius:'50%',padding:'3px'}}></i></div>
                        <div className='rounded-circle'> <i className="fa-brands fa-facebook-f" style={{color: '#000000',padding:'3px 4px'}}></i></div>
                    </div>
                </div>
                </div>
        </div>
    </>
  )
}

export default BusinessCard4;
BusinessCard4.propTypes = {
    companyName: PropTypes.string,
    contactNumber: PropTypes.string,
    companyAddress: PropTypes.string,
    websiteName: PropTypes.string,

};
BusinessCard4.defaultProps = {
    companyName:"Company Name",
    contactNumber:"123 4567 890",
    companyAddress:"47 Anytown Road Chennai Tamil Nadu 600 002 India",
    websiteName:"www.xyx.com"
};
