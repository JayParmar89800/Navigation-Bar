import React, { useState } from "react";

export default function StudentForm(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    if (name.trim() === "" || city.trim() === "") {
        alert("Name and City fields cannot be blank.");
        return;
    }
    const val = {
      name,
      city,
    };
    props.func(val);
    clearState();
  };
  const clearState = () => {
    setName("");
    setCity("");
  };

  return (
    
    <div className="container border my-3 bg-danger-subtle py-2 ">
      <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={changeName}
          className="form-control"
        />
      </div>
      <div className="my-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          City
        </label>
        <input
          type="text"
          value={city}
          onChange={changeCity}
          className="form-control"
        />
      </div>

      <button onClick={transferValue} className="btn btn-outline-danger">
        {" "}
        Submit
      </button>
    </div>
    
  );
}
