import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Mainpage() {
    const [user, setUser] = useState([]);
    const [department, setDepartment] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
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
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
    const AllCard = () => {
      const filteredUsers = selectedDepartment
        ? user.filter((user) =>
            user.company.department.includes(selectedDepartment)
          )
        : user;
  
      const filteredUsersWithSearch = searchQuery.trim()
        ? filteredUsers.filter((user) => {
            const searchLower = searchQuery.toLowerCase();
            const idMatch = user.id.toString() === searchLower;
            const firstNameMatch = user.firstName.toLowerCase().includes(searchLower);
            const lastNameMatch = user.lastName.toLowerCase().includes(searchLower);
            
            return idMatch || firstNameMatch || lastNameMatch;
          })
        : filteredUsers;
  
      return (
        <div className="container mt-3">
          <div className="row row-gap-4">
            {filteredUsersWithSearch.map((users, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-12" key={index}>
                  <div className="card border border-0 shadow bg-warning">
                    <div className="card-body text-center">
                      <img
                        src={users.image}
                        className="img-fluid bg-white"
                        style={{
                          borderRadius: "50%",
                          boxShadow: "0 0 10px black",
                        }}
                        alt="..."
                      />
  
                      <h4 className="card-title my-3 p-2 text-white fw-bold">
                        {users.firstName} {users.lastName}
                      </h4>
                      <Link
                        to={`/Profile/${users.id}`}
                        className="btn btn-danger"
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
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
                        <button
                          className="dropdown-item"
                          onClick={() => setSelectedDepartment(deptartment)}
                        >
                          {deptartment}
                        </button>
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
                  className="form-control"
                  type="search"
                  placeholder="Search by User ID"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </form>
            </div>
          </div>
        </nav>
  
        {location.pathname === "/" ? AllCard() : null}
      </>
    );
  }

export default Mainpage;
