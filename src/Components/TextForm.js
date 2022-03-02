import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("upper Case was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpclicked")
        setText(newText)
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const [text,setText]= useState('Enter Text here');
    // text = "new text"; wrong way to change state;
    // setText("new text"); correct way to change text
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
        </div>
    )
}
