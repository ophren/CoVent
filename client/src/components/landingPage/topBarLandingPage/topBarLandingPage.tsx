import React, { ReactElement, useState } from 'react'
import { TopBarLandingPageLogInButton } from './TopBarLandingPageLogInButton/TopBarLandingPageLogInButton'
import { TopBarSignUpButton } from './TopBarSignUpButton/TopBarSignUpButton'
import './topBarLandingPage.css'
import { TopBarNewMatchesButton } from './TopBarNewMatchesButton/TopBarNewMatchesButton'
import { SignUpForm } from '../SignUpForm'
import { SignInForm } from '../SignInForm'

export const TopBarLandingPage =
  (): ReactElement => {

    const [showModalSignUp, setShowModalSignUp] = useState(false); 
    const [showModalSignIn, setShowModalSignIn] = useState(false); 

    return (
    <div className="top_bar_landing_page_container">
      <TopBarNewMatchesButton />
      <TopBarSignUpButton setShowModal= {setShowModalSignUp} />
      <TopBarLandingPageLogInButton setShowModal={setShowModalSignIn}/>
      {showModalSignUp? 
        <SignUpForm setShowModal={setShowModalSignUp}/> : null }
      {showModalSignIn? 
        <SignInForm setShowModal={setShowModalSignIn}/> : null }
    </div>)
  }