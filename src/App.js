
import { useState } from 'react'; //imrs

import {BrowserRouter,Route, Switch} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode,setmode]= useState('light');
  
  const [switchBox,setSwitch]= useState('Enable');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      setSwitch('Disable');
    }else{
      setmode('light');
      document.body.style.backgroundColor='white' //#a3bde4
      setSwitch('Enable');
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextAnalyser" aboutText="About" switchBox={switchBox} mode={mode} togglemode={togglemode} />

      <div className='container' my-3>
      <Switch>
          <Route path="/"  exact> 
            <TextForm heading="Enter the Text to Analyse" mode={mode}/> 
          </Route>
          <Route path="/about">
            <About/>
          </Route>
      </Switch>
      
      </div>
      {/* <div className='container' my-3>
        <TextForm heading="Enter the Text to Analyse" mode={mode}/>
        <About/>
      </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
