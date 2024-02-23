import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Fullpage() {
  const [user, setUser] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUser(data.emp))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const AllCard = () => {
    const filteredUsersWithSearch = searchQuery.trim()
      ? user.filter((user) => {
          const searchLower = searchQuery.toLowerCase();
          const idMatch = user.id.toString() === searchLower;
          const fullNameMatch = user.fullName
            .toLowerCase()
            .includes(searchLower);

          return idMatch || fullNameMatch;
        })
      : user;

      function ascending() {
        const sortedAscend = [...user].sort(
          (a, b) => new Date(parseDate(a.joiningDate)) - new Date(parseDate(b.joiningDate))
        );
        setUser(sortedAscend);
        console.log("ascending");
      }
    
      function descending() {
        const sortedDescend = [...user].sort(
          (a, b) => new Date(parseDate(b.joiningDate)) - new Date(parseDate(a.joiningDate))
        );
        setUser(sortedDescend);
        console.log("descending");
      }
    
      function parseDate(dateString) {
        const [day, month, year] = dateString.split('/');
        return `${month}/${day}/${year}`;
      }
    
    return (
      <div className="container mt-3">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th className="d-flex justify-content-around">
                <button
                  className="fw-normal mb-1 btn btn-secondary"
                  onClick={() => {
                    ascending();
                  }}
                >
                  <span className="me-2">Ascend</span><i className="arrow up"></i>

                </button>
                Joining Date
                <button
                  className="fw-normal mb-1 btn btn-secondary"
                  onClick={() => {
                    descending();
                  }}
                >
                <span className="me-2">Dscend</span><i className="arrow down"></i>
                </button>
              </th>
              <th>Full Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsersWithSearch.map((users, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>
                      <p className="fw-normal mb-1">{users.id}</p>
                    </td>
                    <td>
                      <img
                        src={users.image}
                        alt="user not found"
                        style={{ width: "60px", height: "60px" }}
                        className="rounded-circle img-fluid border border-black border-1"
                      />
                    </td>
                    <td>
                      <p className="fw-bold mb-1">{users.fullName}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{users.email}</p>
                    </td>
                    <td className="text-center">
                      <p className="fw-normal mb-1">{users.joiningDate}</p>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link btn-sm btn-rounded"
                      >
                        <Link
                          to={`/Profile/${users.id}`}
                          className="fw-bold text-black"
                        >
                          View
                        </Link>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            India
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
                placeholder="Search by User FullName"
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

export default Fullpage;
