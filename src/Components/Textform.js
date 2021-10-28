import React, { useState } from "react";

export default function Textform(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}>
          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes reading time</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
