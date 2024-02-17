import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

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
    }, 1000);
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
    <Alert alerttext={alerttext}/>
    <div className='container'>
    <TextForm labeltextbox='Paste the text below' mode={mode} setAlert={setAlert}/>
    </div>
    </>
  );
}

export default App;
