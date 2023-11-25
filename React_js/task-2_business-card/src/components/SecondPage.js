import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import BusinessCard1 from './BusinessCard1';
import BusinessCard2 from './BusinessCard2';
import BusinessCard3 from './BusinessCard3';
import BusinessCard4 from './BusinessCard4';
import BusinessCard5 from './BusinessCard5';
import { useParams } from 'react-router-dom';

function SecondPage() {

    const { selectedCard } = useParams();
    const [formData, setFormData] = useState({ companyName: '', companyAddress: '',websiteName:'',contactNumber:'' ,CompanyLogo:'',TagLine:''});// Initialize text state with an empty string

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setFormData((prevData) => ({
            ...prevData,
            CompanyLogo: reader.result,
          }));
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    

    const renderSelectedComponent = () => {
        switch (selectedCard) {
            case 'BusinessCard1':
                return <BusinessCard1 {...formData} />;
            case 'BusinessCard2':
                return <BusinessCard2 {...formData} />;
            case 'BusinessCard3':
                return <BusinessCard3 {...formData} />;
            case 'BusinessCard4':
                return <BusinessCard4 {...formData} />;
            case 'BusinessCard5':
                return <BusinessCard5 {...formData} />;
            default:
                return null;
        }
    };
    const handleTransferClick = () => {
        const printWindow = window.open('', '_blank');
        const styles = document.head.innerHTML;
      
        if (printWindow) {
          printWindow.document.write('<html><head><title>Print</title>');
          printWindow.document.write(styles);
          printWindow.document.write('</head><body>');
          printWindow.document.write('<div style="margin: 20px;">');
          printWindow.document.write(ReactDOMServer.renderToString(renderSelectedComponent()));
          printWindow.document.write('</div></body></html>');
      
          printWindow.document.close();
          printWindow.print();
        } else {
          console.error('Print window is closed.');
        }
      };
      
    const handleChange = (event, fieldName) => {
        const value = event.target.value;
        if (fieldName === 'contactNumber' && isNaN(value)) {
            return;
        }
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };
    
  return (
    <>
        <div className='container-fluid px-0 '>
            <div className='row mx-0'>
                <div className='col-md-6 col-12 px-0'>
                <section className="">
                    <div className="mask d-flex align-items-center gradient-custom-3">
                        <div className="container py-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-10">
                            <div className="card" style={{borderRadius: '15px'}}>
                                <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Fill the Details</h2>
                                <form>
                                    <div className="form-outline mb-4">
                                        <input type="text" id="txt_nm" value={formData.companyName} onChange={(e) => handleChange(e, 'companyName')} className="form-control form-control-lg" />
                                        <label className="form-label"  htmlFor="txt_nm">Company Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="txt_contact"  value={formData.contactNumber}  onChange={(e) => handleChange(e, 'contactNumber')} className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="txt_contact">Company Conatact</label>
                                    </div>
                                  
                                    <div className="form-outline mb-4" >
                                        <textarea id='txt_address'  value={formData.companyAddress}  onChange={(e) => handleChange(e, 'companyAddress')} className="form-control form-control-lg">
                                        </textarea>
                                        <label className="form-label" htmlFor="txt_address">Company Address</label>
                                    </div>
                                  
                                    <div className="form-outline mb-4">
                                        <input type="text" id="txt_wb_nm" value={formData.websiteName}  onChange={(e) => handleChange(e, 'websiteName')}   className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="txt_wb_nm">Wbsite Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="txt_tag_line"  value={formData.TagLine}  onChange={(e) => handleChange(e, 'TagLine')} className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="txt_tag_line">Tag Line</label>
                                    </div>

                                    <input
                                        class='form-control'
                                        type='file'
                                        id='txt_img'
                                        onChange={handleImageChange}
                                        className='form-control form-control-lg'
                                    />
                                    <label
                                        htmlFor='txt_img'
                                        id='txt_tag_line'
                                        class='form-label'
                                    ></label>

                                    <div className="d-flex justify-content-center">
                                    <button type="button" onClick={handleTransferClick}
                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Transfer</button>
                                    </div>


                                </form>

                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                </div>
                
                <div className='col-md-6 col-12 d-flex flex-column justify-content-evenly align-items-center  gradient-custom-5'>
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>
    </>
  )
}

export default SecondPage;
