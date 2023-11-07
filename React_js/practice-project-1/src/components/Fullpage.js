import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Fullpage() {
  const [user, setUser] = useState([]);
  const [department, setDepartment] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    const departments = user.map((userData) => userData.company.department);
    const uniqueDepartments = [...new Set(departments.flat())];
    setDepartment(uniqueDepartments);
  }, [user]);

  const AllCard = () => {
    return (
      <div className="container mt-3">
        <div className="row row-gap-4">
          {user.map((users, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-12" key={index}>
                <div className="card border border-0 shadow">
                  <img src={users.image} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {users.firstName} {users.lastName}
                    </h5>
                    <Link
                      to={`/Profile/${users.id}`}
                      className="btn btn-warning"
                    >
                      Click To View Profile
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
       <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Department
                </a>
                <ul className="dropdown-menu">
                  {department.map((deptartment, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" path=":department" to={`/${deptartment.department}`}>{deptartment}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {location.pathname === '/' ? AllCard() : null}
    </>
  );
}

export default Fullpage;
