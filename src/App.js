import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode,setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled","success")
    }


  }
  
  const [alert, setalert] = useState(null);


  const showAlert = (message,type) => {
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  return (
    <>
      <Navbar mode={mode} title="TextUtils" toggleMode={toggleMode}  aboutText="About Us"/>
      <Alert  alert={alert}/>
      <div className="container my-10">
      <Textform showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
