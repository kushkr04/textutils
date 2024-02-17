import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alerttext, setalerttext] = useState(null)

  const setAlert = (msg, type)=>{
    setalerttext({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setalerttext(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#343a40'
      setAlert('Dark mode enabled', 'success');
    } else {
      setmode('light');
      document.body.style.backgroundColor='white'
      setAlert('Dark mode disabled', 'success');
    }
  }
  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alerttext={alerttext} mode={mode}/>
    <Routes>
        <Route exact path="/" element={<TextForm labeltextbox='Paste your text below' mode={mode} setAlert={setAlert}/>}/>
        <Route exact path="about" element={<About mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
