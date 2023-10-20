import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(''); // Initialize text state with an empty string

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext); // Update the text state
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext); // Update the text state
    props.showAlert("Converted to lowercase!","success");
  };
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext); // Update the text state
    props.showAlert("Clear text!","success");
  };
  const handlerevClick = () => {
    let newtext = text.split("").reverse().join("");
    setText(newtext); // Update the text state
    props.showAlert("Converted to Revers!","success");
  };
  const handleChange = (event) => {
    setText(event.target.value); // Update the text state as the user types
  };
  const handleExtraSpaces = () =>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Remove!","success");
  }

  return (
    <div className={`container my-4 p-5 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'} rounded-2` }>
      <h1>{props.heading}</h1>
      <div className="mb-3 d-flex column-gap-3">
          <textarea
            className="form-control border border-black"
            value={text}
            onChange={handleChange} // Use handleChange to update text as the user types
            id="exampleFormControlTextarea1"
            rows="5"
            style={{backgroundColor:props.mode==='light'?'#e2e3e5':'white',resize:'none'}}
          ></textarea>    
           <textarea
            className="form-control border border-black"
            value={text}
            onChange={handleChange} // Use handleChange to update text as the user types
            id="exampleFormControlTextarea1"
            rows="5"
            style={{backgroundColor:props.mode==='light'?'#e2e3e5':'white',resize:'none'}}
          ></textarea>        
      </div>
      <div className="bg-secondary-subtle text-black p-3 my-3 rounded-3 fw-bold h5 border border-black">
        <div>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words</div>
        <div>{text.length} Characters</div>
        <div>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes Read</div>
      </div>
      <div className='grid_link'>
      <button
        type="button"
        disabled={text.length===0}
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handleUpClick}
      >
        UpperCase
      </button>
      <button
        type="button"
        disabled={text.length===0}
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handleLoClick}
      >
        LowerCase
      </button>
      <button
        type="button"
        disabled={text.length===0}
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handlerevClick}
      >
        Reverse
      </button>
      <button
        type="button"
        disabled={text.length===0}
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <button
        type="button"
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handleClearClick}
      >
        Clear
      </button>
     
      </div>
    </div>
  );
}
