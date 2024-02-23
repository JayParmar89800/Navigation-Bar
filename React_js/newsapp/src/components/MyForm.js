import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container contact">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="* not found"
                />
                <h2>Contact Us</h2>
                <h4>We would love to hear from you !</h4>
              </div>
            </div>
            <div className="col-md-9 bg-primary-subtle">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" for="fname">
                    Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      onChange={handleInputChange}
                    />{" "}
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="email">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={handleInputChange}
                    />{" "}
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="comment">
                    Password:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="comment">
                    Confirm Password:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      id="cnfpassword"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <Link
                      to="./AnotherPage" // Specify the target route
                      state={formData}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary mt-3 btn-lg"
                      >
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MyForm;
