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
import DescriptionForm from '../DescriptionForm'

export const TopBarLandingPage =
  (): ReactElement => {

    const [showModalSignUp, setShowModalSignUp] = useState(false);
    const [showModalSignIn, setShowModalSignIn] = useState(false);
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);

    const history = useHistory()
    const userIsLoggedIn = useSelector((state: RootState) => state.system.loggedIn)

    function handleClick() {
      history.push("/profile")
    }

    return (
    <div className="top_bar_landing_page_container">
      
      <div id="logo-area">
        <span id= "app-logo">CO</span><span id="v">V</span><span id="app-logo">ENT</span>
        <div id ="app-catchphrase">Connecting people through events</div>
      </div>

      <div id="top-right-buttons-area">
        <TopBarNewMatchesButton />
        <TopBarSignUpButton setShowModal= {setShowModalSignUp}/>
        

        {showModalSignUp?
          <SignUpForm setShowModal={setShowModalSignUp} setShowDescriptionModal= {setShowDescriptionModal}/> : null }
        {showModalSignIn?
          <SignInForm setShowModal={setShowModalSignIn}/> : null }
        {showDescriptionModal?
          <DescriptionForm setShowDescriptionModal= {setShowDescriptionModal}/> : null}
        {userIsLoggedIn &&
          <button id="profile-btn" onClick={handleClick} >Profile</button>
        }
        <TopBarLandingPageLogInButton setShowModal={setShowModalSignIn} />
      </div>
    </div>
    )
  }