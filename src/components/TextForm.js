import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleToUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">{props.labeltextbox}</label>
            <textarea className="form-control" id="formGroupExampleInput" onChange={handleOnChange} rows={8} value={text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleToUpperCase}>Convert to UpperCase</button>
        </>
    );
}
