import React, { ReactElement } from 'react'
import { TopBarLandingPageLogInButton } from './TopBarLandingPageLogInButton/TopBarLandingPageLogInButton'
import { TopBarSignUpButton } from './TopBarSignUpButton/TopBarSignUpButton'
import './topBarLandingPage.css'
import { TopBarNewMatchesButton } from './TopBarNewMatchesButton/TopBarNewMatchesButton'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../types/combinedStoreTypes'

export const TopBarLandingPage =
  (): ReactElement => {

    let history = useHistory()
    const userIsLoggedIn = useSelector((state: RootState) => state.system.loggedIn)

    function handleClick() {
      history.push("/profile")
    }

    return (<div
      className="top_bar_landing_page_container"
    >
      <TopBarNewMatchesButton />
      <TopBarSignUpButton />
      <TopBarLandingPageLogInButton />
      {userIsLoggedIn &&
        <button onClick={handleClick} >Profile</button>
      }

    </div>)
  }