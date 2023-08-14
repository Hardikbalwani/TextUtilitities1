import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success")
      document.title = "TextUtils : Dark-Mode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success")
      document.title = "TextUtils : Light-Mode";

    }


  }

  const [alert, setalert] = useState(null);


  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About us" />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            <TextForm showAlert={showAlert} mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
