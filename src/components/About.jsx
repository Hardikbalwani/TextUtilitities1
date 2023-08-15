// import React,{useState} from 'react'


export default function About(props) {
  
  // const [myStyle,setmyStyle] = useState({
  //   color: 'black',
  //   backgroundColor:'white'
  // })

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
  }
  
  
  return (
    <>
     
      <div className="container my-3" style={myStyle}>
        <h1 style={{color:props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
        
        <div className="row">
        <div className="col">

        <div className="accordion accordion-flush" style={myStyle} id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Analyse Your Text</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Empower your text with insights. Uncover patterns, sentiments, and more as you analyze your text using our powerful Text Analysis tools..</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Unlock the potential without any cost. Enjoy the full range of features and tools with our Text Utilities, all available for free.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={myStyle}>Seamless experience across browsers. Our Text Utilities are optimized to work smoothly on all major web browsers, ensuring accessibility and convenience for every user.</div>
            </div>
          </div>
        </div>
        
        </div>
        </div>

      </div>
      
    </>
  )
}
