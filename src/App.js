import React,{ useState } from 'react';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {BrowserRouter as Router,Routes ,Route,Link} from 'react-router-dom';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }
  const toggleMode=()=>{
    if (Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showalert(" Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert(" Light mode has been enabled","success")
    }
  }
  
  return (
    <>
      
        <Navbar title="TextUtils"  mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
         <TextForm showalert={showalert} heading="Enter Your Text here" mode={Mode} />
          
        </div>
    
    </>
    
  );
}

export default App;
// eslint-disable-next-line no-lone-blocks
{/* <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter Your Text here" mode={Mode} />} />
          </Routes>
        </div>
      </Router> */}