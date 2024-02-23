import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import FullPage from "./FullPage";
// import Navbar from './Navbar';

function Page() {
  const location = useLocation();
  console.log(location);

  const params = useParams();
  const id = params.id;
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    async function fetchEmployee() {
      if (id) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const fetchedEmployee = await response.json();
        setEmployee(fetchedEmployee);
      }
    }
    fetchEmployee();
  }, [id]);
  return (
    <>
      <FullPage />
      <div className="container">
        <div className="row row-gap-4">
          {employee.map((employee, index) => {
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
    </>
  );
}

export default Page;
