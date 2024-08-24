//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

   
  const [alert, setAlert] = useState(null);
  //this 'alert' here is a object
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      ty:type
    })
     setTimeout(()=>{
      setAlert(null)
     },2000)
   }
  const [mode, setMode] = useState('light');

  const[modeText,setModetext]=useState('Dark Mode Enabled')

   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setModetext('Dark Mode Enabled')
      showAlert('dark mode has been enabled','success')
      document.title='Go Text-Dark Mode'
      document.body.style.backgroundColor='#031d16'
      
    }
    else{
      setMode('light')
      setModetext('Light Mode Enabled')
      showAlert('light mode has been enabled','success')
      document.title='Go Text-Light Mode'
      document.body.style.backgroundColor='white'
      
    }

   }
  
const TextWrapper =()=>{
  return <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>
}
   const NavbarWrapper = () => {
    return <Navbar mode={mode} modeText={modeText} toggleMode={toggleMode} />
  };
   
  const AlertWrapper = ()=>{
       return <Alert alert={alert}/> 

  } 
  
  
  const router = createBrowserRouter([

    { path:'/'  ,
      element:<><NavbarWrapper/><AlertWrapper/><TextWrapper/></>
    },

    { path:'/about'  ,
      element:<><NavbarWrapper /><AlertWrapper/><About/></>
    }

   ])
  return (
   
    
    <>
    
      {/* <Navbar mode={mode} modeText={modeText} toggleMode={toggleMode}/>
      <Alert alert={alert}/> 
         {/* this 'alert' here is a property              
      <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>
      <About/> */}
      <RouterProvider  router={router}/>              
    </>
  );
}

export default App;