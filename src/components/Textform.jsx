import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Text has been converted to Uppercase","success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" Text has been converted to Lowercase","success");
    
  }

  const handleClearClick = () => {
    setText("");
    props.showAlert(" Text has been cleared","warning");
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);  
    props.showAlert(" Copied to Clipboard","success");
  }
  

  const handleOnchange = (event) => {
    // console.log("ON change");
    setText(event.target.value);
   
  }

  const [text,setText] = useState("");
  

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black' }} id='myBox' rows="10"></textarea>
   </div>
  <button  onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UpperCase</button>
  <button  onClick={handleLowClick} className="btn btn-primary mx-2">Convert to LowerCase</button>
  <button  onClick={handleClearClick} className="btn btn-primary mx-2">Clear Text</button>
  <button  onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
  </div>

   <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{text.split(" ").length * 0.008} Minutes to read </p>
    <h2>Preview</h2>
    <p>{text===""?'Enter your text to preview':text}</p>
   </div>

    </>
  )
}
