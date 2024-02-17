import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='TextUtils'/>
    <div className='container'>
    <TextForm labeltextbox='Paste the text below'/>
    </div>
    </>
  );
}

export default App;
