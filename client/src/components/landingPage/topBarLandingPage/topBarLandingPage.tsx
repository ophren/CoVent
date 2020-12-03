import React, { ReactElement, useState } from 'react'
import { TopBarLandingPageLogInButton } from './TopBarLandingPageLogInButton/TopBarLandingPageLogInButton'
import { TopBarSignUpButton } from './TopBarSignUpButton/TopBarSignUpButton'
import './topBarLandingPage.css'
import { TopBarNewMatchesButton } from './TopBarNewMatchesButton/TopBarNewMatchesButton'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../types/combinedStoreTypes'
import SignUpForm from '../SignUpForm'
import SignInForm from '../SignInForm'

export const TopBarLandingPage =
  (): ReactElement => {

    const [showModalSignUp, setShowModalSignUp] = useState(false); 
    const [showModalSignIn, setShowModalSignIn] = useState(false); 

    let history = useHistory()
    const userIsLoggedIn = useSelector((state: RootState) => state.system.loggedIn)

    function handleClick() {
      history.push("/profile")
    }

    return (<div
      className="top_bar_landing_page_container"
    >
      <TopBarNewMatchesButton />
      <TopBarSignUpButton setShowModal= {setShowModalSignUp}/>
      <TopBarLandingPageLogInButton setShowModal={setShowModalSignIn} />
      {showModalSignUp? 
        <SignUpForm setShowModal={setShowModalSignUp}/> : null }
      {showModalSignIn? 
        <SignInForm setShowModal={setShowModalSignIn}/> : null }
      {userIsLoggedIn &&
        <button onClick={handleClick} >Profile</button>
      }

    </div>)
  }