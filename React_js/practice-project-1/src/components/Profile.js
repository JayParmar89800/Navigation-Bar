import React, { useEffect, useState } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import Fullpage from "./Fullpage";
function Profile() {

    const [user, setUser] = useState([]);

    const params = useParams();
    const id = params.id;
    useEffect(() => {
        fetch("https://dummyjson.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data.users))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

      let filteredData = user;

        if(id)
        {
          filteredData = user.filter(item => item.id === parseInt(id));
        }
        console.log(filteredData);
  return (
    <>
    <Fullpage/>
      {filteredData.map((filteredData,index) =>
      {
        return (
        <section className="vh-100" key={index} style={{ backgroundcolor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3">
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    // style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
                  >
                    <img
                      src={filteredData.image}
                      alt="Avatar"
                      className="img-fluid my-5"
                    //   style="width: 80px;"
                    />
                    <h4>{filteredData.firstName} {filteredData.lastName}</h4>
                    <h5>{filteredData.company.department}</h5>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8 bg-dark-subtle">
                    <div className="card-body p-4">
                    <h3>Personal Information</h3>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{filteredData.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{filteredData.phone}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>University</h6>
                          <p className="text-muted">{filteredData.university}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">{filteredData.address.address},{filteredData.address.city}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Age</h6>
                          <p className="text-muted">{filteredData.age}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Gender</h6>
                          <p className="text-muted">{filteredData.gender}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Height</h6>
                          <p className="text-muted">{filteredData.height}</p>
                        </div>
                        <div className="col-6 mb-3">
                        <h6>Weight</h6>
                          <p className="text-muted">{filteredData.weight}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Birth Date</h6>
                          <p className="text-muted">{filteredData.birthDate}</p>
                        </div>
                        <div className="col-6 mb-3">
                        <h6>Blood Group</h6>
                          <p className="text-muted">{filteredData.bloodGroup}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)})}
   </> 
  );
}

export default Profile;
