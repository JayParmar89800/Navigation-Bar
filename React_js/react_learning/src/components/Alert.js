import React from "react";

function Alert(props) {
    const capitalize = (word) =>
    {
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);  
    }
  return (
    props.alert && <div className="container my-3 animate__animated animate__backInDown">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    </div>
  );
}

export default Alert;
