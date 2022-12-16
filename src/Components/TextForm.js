import React, { useState } from "react"; //rfc

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upper Case was clicked " + text);
    let newText = text.toUpperCase();
    // setText("You have clicked on handleUpclicked")
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("lower Case was clicked" + text);
    let newText = text.toLowerCase();
    // setText("You have clicked on handleLoclicked")
    setText(newText);
  };
  const clearall = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; wrong way to change state;
  // setText("new text"); correct way to change text
  return (
    <>
      <div className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
            
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-3" onClick={clearall}>
          Clear
        </button>
        <button className="btn btn-outline-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          Your Text has <b>{text.split(" ").length}</b> words and{" "}
          <b>{text.length}</b> characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to prewiew it here"}
        </p>
      </div>
    </>
  );
}
