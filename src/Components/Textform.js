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

  const handleCapitalClick = () => {
    let newText1 = text.toLowerCase();
    const result = newText1.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
    setText(result);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };


  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
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
          <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnChange}>
          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Captalize first letter</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
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
