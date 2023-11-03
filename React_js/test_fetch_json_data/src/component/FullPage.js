import React, { useState, useEffect } from 'react';
import {Link, useLocation } from 'react-router-dom';


function FullPage() {
    const [employees, setEmployees] = useState([]);
    const location = useLocation();
    useEffect(() => {
      async function fetchEmployees() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const fetchedEmployees = await response.json();
        setEmployees(fetchedEmployees);
      }
      fetchEmployees();
    }, []);
  
    const AllPost=()=>
    {
      return(
        <div className='container'>
          <div className="row row-gap-4">
          { employees.map((employee, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="card bg-dark-subtle border border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-2 border-black border-bottom border-3">
                      {employee.id}. {employee.name}
                    </h5>
                    <div className="card-text">
                      <div className="row">
                        <div className="col-4 fw-bold">Username </div>
                        <div className="col-1 text-center">:</div>
                        <div className="col">{employee.username}</div>
                      </div>
                      <div className="row">
                        <div className="col-4 fw-bold">Email</div>
                        <div className="col-1 text-center">:</div>
                        <div className="col text-break">{employee.email}</div>
                      </div>
                      <div className="row">
                        <div className="col-4 fw-bold">Address</div>
                        <div className="col-1 text-center">:</div>
                        <div className="col ">
                          {employee.address.city},{employee.address.street},
                          {employee.address.zipcode}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 fw-bold">Phone</div>
                        <div className="col-1 text-center">:</div>
                        <div className="col">{employee.phone}</div>
                      </div>
                      <div className="row">
                        <div className="col-4 fw-bold">Website</div>
                        <div className="col-1 text-center">:</div>
                        <div className="col">{employee.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> 
        </div>
      );
    }
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Json Data
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {employees.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link target='_blank' className="nav-link" path=":id" to={`/Page/${item.id}`} >
                      {item.id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <h2 className="text-center text-danger fw-bold scroll-text py-3">
        Json Data Fetching
      </h2>           
      {location.pathname === '/' ? AllPost() : null}
      </>
    );
  }

export default FullPage
