import React, { useState, useEffect } from "react";

function Fullpage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUser(data.users))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row row-gap-4">
        {user.map((users, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-12" key={index}>
              <div className="card border border-0 shadow">
                <img src={users.image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{users.firstName} {users.lastName}</h5>
                  <a href="#" className="btn btn-warning">
                    Click To View Profile
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fullpage;
