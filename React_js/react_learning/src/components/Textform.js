import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const hadleOnChange = (event) => {
        settext(event.target.value);
    }
    const[text,settext]=useState('Enter text here');
  return (
    <div className="container my-4">
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <textarea class="form-control" value={text} onChange={hadleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="text" className="btn btn-outline-warning" onClick={handleUpClick}>
            UpperCase
        </button>
    </div>
  )
}
