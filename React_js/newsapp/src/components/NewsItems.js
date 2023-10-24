import React, { Component } from "react";

export class NewsItems extends Component {
   
  render() {
    let {title,description,imageUrl,newsurl}=this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/10/23/1600x900/India-Cricket-WCup-10_1698051548060_1698051577688.jpg"} className="card-img-top" alt="..." />
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
