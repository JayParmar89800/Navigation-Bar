import React from "react";
import BusinessCard1 from "./BusinessCard1";
import BusinessCard2 from "./BusinessCard2";
import BusinessCard3 from "./BusinessCard3";
import BusinessCard4 from "./BusinessCard4";
import BusinessCard5 from "./BusinessCard5";
import { Link } from "react-router-dom";
function Mainpage() {
  const gridcss={
    display:'flex',
    alignItems:'center'
  }
  return (
    <div className="container-fluid bg-image py-2">
    <div className="container ">
      <div className="row my-4 row-gap-5">
        <div className="col-md-6 col-lg-4 col-12" style={gridcss}>
          
          <Link to="/SecondPage/BusinessCard1" target="_blank" className="nav-link">
            <BusinessCard1 />
          </Link>
        
        </div>
        <div className="col-md-6 col-lg-4 col-12" style={gridcss}>
          <Link to="/Secondpage/BusinessCard2" target="_blank" className="nav-link">
            <BusinessCard2 />
          </Link>
        </div>
        <div className="col-md-6 col-lg-4 col-12" style={gridcss}>
          <Link to="/Secondpage/BusinessCard3" target="_blank" className="nav-link">
            <BusinessCard3 />
          </Link>
        </div>
        <div className="col-md-6 col-lg-4 col-12" style={gridcss}>
          <Link to="/Secondpage/BusinessCard4" target="_blank" className="nav-link">
            <BusinessCard4 />
          </Link>
        </div>
        <div className="col-md-6 col-lg-4 col-12" style={gridcss}>
          <Link to="/Secondpage/BusinessCard5" target="_blank" className="nav-link">
            <BusinessCard5 />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mainpage;
