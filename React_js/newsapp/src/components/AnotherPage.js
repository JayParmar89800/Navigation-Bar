import React from 'react'
import { useLocation } from "react-router-dom";

export default function AnotherPage () {

    const location = useLocation();
    const formData = location.state; // Check if location.state exists


    if (!formData) {
      return <div>Data not found</div>;
    }
    return (
      <div>
        <h2>Displaying Input Data</h2>
        <ul>
          <li>Name: {formData.name}</li>
          <li>Email: {formData.email}</li>
        </ul>
      </div>
    );
  }
