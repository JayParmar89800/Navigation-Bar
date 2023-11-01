import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import { useParams, Link, useLocation } from 'react-router-dom';

function News() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const fetchedEmployees = await response.json();
      setEmployees(fetchedEmployees);
      setEmployee(fetchedEmployees); // Set employee to all employees initially
    }
    fetchEmployees();
  }, []);

  useEffect(() => {
    async function fetchEmployee() {
      if (id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        const fetchedEmployee = await response.json();
        setEmployee(fetchedEmployee);
      } else {
        // Reset employee to all employees if there is no ID in the URL
        setEmployee(employees);
      }
    }
    fetchEmployee();
  }, [id, employees]);

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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {employees.map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link className="nav-link" to={`/${item.id}`}>
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
      <div className="container ">
        <div className="row row-gap-3">
          {employee.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-12" key={index}>
                <NewsItems
                  id={element.id}
                  name={element.name}
                  username={element.username}
                  email={element.email}
                  address={element.address.city}
                  phone={element.phone}
                  website={element.website}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
