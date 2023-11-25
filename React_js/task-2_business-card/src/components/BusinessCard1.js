import React from 'react';
import companylogo from '../default_user.png';
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';


function BusinessCard1_1()
{
    return(
        <>
        <div className="horizontal_card">
        <div className='container-fluid card-bg card-bg1 border py-2 d-flex flex-column justify-content-evenly'>
            <div className='row position-relative'>
                <div className='col-6 position-absolute end-0'>
                    {/* <img src={formData.CompanyLogo?formData.CompanyLogo:companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid object-fit-cover' style={{height:'130px',width:'130px'}}/> */}
                </div>
            </div>
                
            </div>
    </div>
        </>
    );
}
function BusinessCard1(formData) {

    const location = useLocation();

  return (
    <>
    {location.pathname !== "/" ? BusinessCard1_1() : null}

    <div className="horizontal_card">
       <div className='container-fluid card-bg card-bg1 border py-2 d-flex flex-column justify-content-evenly'>
                <div className='row '>
                    <div className='col-6 d-flex flex-column align-items-center justify-content-center'> 
                        <div className='d-flex align-items-center'>
                        <img src={formData.CompanyLogo?formData.CompanyLogo:companylogo} alt='logo not found' className='border border-1 rounded-circle img-fluid object-fit-cover' style={{height:'130px',width:'130px'}}/>
                        </div>
                        <div className='w-100'>
                        <p className='fw-bold h3 mb-0'>
                            {formData.companyName}
                        </p>
                        </div>
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-end align-items-end'>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div><span className='fw-bold'>+91</span> {formData.contactNumber}</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-solid fa-phone" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center'>
                            <div style={{wordBreak: 'break-all'}}>{formData.companyAddress}</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-solid fa-location-dot" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-1 align-items-center mb-1'>
                            <div>{formData.websiteName}</div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-solid fa-earth-americas" style={{color: '#ffffff',padding:'3px'}}></i></div>
                        </div>
                        <div className='d-flex column-gap-2 align-items-center ' style={{marginBottom:'10px'}}>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-brands fa-twitter" style={{color: '#ffffff',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-brands fa-linkedin" style={{color: '#ffffff',borderRadius:'50%',padding:'3px'}}></i></div>
                            <div className='rounded-circle' style={{backgroundColor:'#0175b2',padding:'2.4px'}}> <i className="fa-brands fa-facebook-f" style={{color: '#ffffff',padding:'3px 4px'}}></i></div>
                        </div>
                    </div>              
                </div>
                <div className='text-center text-warning fw-bold fst-italic border-top border-warning'>
                    " {formData.TagLine} "
                </div>
            </div>
    </div>
    </>
  )
}

export default BusinessCard1;
BusinessCard1.propTypes = {
    companyName: PropTypes.string,
    contactNumber: PropTypes.number,
    companyAddress: PropTypes.string,
    websiteName: PropTypes.string,
    CompanyLogo:PropTypes.string,
    TagLine:PropTypes.string
};
BusinessCard1.defaultProps = {
    companyName:"Company Name",
    contactNumber:"123 4567 890",
    companyAddress:"47 Anytown Road Chennai Tamil Nadu 600 002 India",
    websiteName:"www.xyz.com",
    CompanyLogo:companylogo,
    TagLine:"A good beginning makes a good end."
};
BusinessCard1_1.propTypes = {

    CompanyLogo:PropTypes.string
   
};
BusinessCard1_1.defaultProps = {
  
    CompanyLogo:companylogo
};
