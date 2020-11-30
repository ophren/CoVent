import React from 'react';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useState } from 'react';
import './App.css';

function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    {isLoggedIn ? 
      <>
        <ToastContainer/>
        <div>LogIn</div>
        <SignIn isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></SignIn>
      </>

    : 
      <>
        <ToastContainer/>
        <div>Register:</div>
        <SignUp isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}></SignUp>
      </>
    }
    </>
  );
}

export default App;
