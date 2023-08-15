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
    text.select() ;
    navigator.clipboard.writeText(text.value); 
    document.getSelection().removeAllRanges(); 
    props.showAlert(" Copied to Clipboard","success");
  }

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }
  

  const handleOnchange = (event) => {
    // console.log("ON change");
    setText(event.target.value);
   
  }

  const [text,setText] = useState("");
  
  // console.log(props.heading);

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
   <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'black' }} id='myBox' rows="10"></textarea>
   </div>
  <button disabled={text.length === 0} onClick={handleUpClick} className="btn btn-primary mx-2 my-1">Convert to UpperCase</button>
  <button disabled={text.length === 0} onClick={handleLowClick} className="btn btn-primary mx-2 my-1">Convert to LowerCase</button>
  <button disabled={text.length === 0} onClick={handleClearClick} className="btn btn-primary mx-2 my-1">Clear Text</button>
  <button disabled={text.length === 0} onClick={handleCopy} className="btn btn-primary mx-2 my-1">Copy Text</button>
  <button disabled={text.length === 0} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-1">Remove Extra Spaces</button>
  </div>

   <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2 className="mb-4">Your Text Summary</h2>
    <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length } Minutes to read </p>
    <h2>Preview</h2>
    <p>{text===""?'Nothing to preview':text}</p>
   </div>

    </>
  )
}
