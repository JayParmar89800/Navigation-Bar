import React from "react";

function NewsItems(props) {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.id}. {props.name}</h5>
          <div className="card-text">
            <div className="row">
                <div className="col-5">Username</div>
                <div className="col">{props.username}</div>
            </div>
            <div className="row">
                <div className="col-5">Email</div>
                <div className="col text-break">{props.email}</div>
            </div>
            <div className="row">
                <div className="col-5">Address</div>
                <div className="col ">{props.address}</div>
            </div>
            <div className="row">
                <div className="col-5">Phone</div>
                <div className="col">{props.phone}</div>
            </div>
            <div className="row">
                <div className="col-5">Website</div>
                <div className="col">{props.website}</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
