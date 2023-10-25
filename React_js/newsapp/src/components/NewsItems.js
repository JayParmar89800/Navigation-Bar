import React, { Component } from "react";
import '../App.css';
export class NewsItems extends Component {
   
  render() {
    let {title,description,imageUrl,newsurl}=this.props;
    return (
      <div className="my-3">
        <div className="card shadow" style={{minHeight:'400px',maxHeight:'auto'}}>
          <img src={imageUrl?imageUrl:"https://as1.ftcdn.net/v2/jpg/03/27/55/60/1000_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} className="card-img-top" alt="..." style={{minHeight:'190px',maxHeight:'190px',objectFit:'cover' }}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <a href={newsurl} target="blank" className="btn btn-dark btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
