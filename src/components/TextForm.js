import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleToUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.setAlert('Converted to uppercase', 'success');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClearText = ()=>{
        setText('')
        props.setAlert('Cleared text', 'danger');
    }
    const handlCopy = ()=>{
        let text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setAlert('Copied to clipboard', 'success');
    }

    return (
        <>
        <div className="container">
            <div className="mb-3 my-4" style={{backgroundColor: props.mode === 'dark'? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : '#343a40'}}>
                <label htmlFor="textbox" className="form-label">{props.labeltextbox}</label>
                <textarea className="form-control" id="textbox" style={{backgroundColor: props.mode === 'dark'? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : '#343a40'}} onChange={handleOnChange} rows={8} value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleToUpperCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handlCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{backgroundColor: props.mode === 'dark'? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : '#343a40'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes read</p>
        </div>
        </>
    );
}
