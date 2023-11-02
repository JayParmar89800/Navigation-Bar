import React from 'react'
import { useLocation } from 'react-router-dom';

function PageItems(props) {
    const location = useLocation();
    console.log(location);
    return (
      <div>
        <div className="card shadow bg-warning-subtle">
          <div className="card-body">
            <h5 className="card-title fw-bold pb-2 border-black border-bottom border-3">{props.id}. {props.name}</h5>
            <div className="card-text">
              <div className="row">
                  <div className="col-4 fw-bold">Username </div>
                  <div className='col-1 text-center'>:</div>
                  <div className="col">{props.username}</div>
              </div>
              <div className="row">
                  <div className="col-4 fw-bold">Email</div>
                  <div className='col-1 text-center'>:</div>
                  <div className="col text-break">{props.email}</div>
              </div>
              <div className="row">
                  <div className="col-4 fw-bold">Address</div>
                  <div className='col-1 text-center'>:</div>
                  <div className="col ">{props.addresscity},{props.addressstreet},{props.addresszipcode}</div>
              </div>
              <div className="row">
                  <div className="col-4 fw-bold">Phone</div>
                  <div className='col-1 text-center'>:</div>
                  <div className="col">{props.phone}</div>
              </div>
              <div className="row">
                  <div className="col-4 fw-bold">Website</div>
                  <div className='col-1 text-center'>:</div>
                  <div className="col">{props.website}</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }

export default PageItems
