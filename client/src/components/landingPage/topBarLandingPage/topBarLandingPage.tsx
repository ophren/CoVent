import React, { ReactElement } from 'react'
import { TopBarLandingPageLogInButton } from './TopBarLandingPageLogInButton/TopBarLandingPageLogInButton'
import { TopBarSignUpButton } from './TopBarSignUpButton/TopBarSignUpButton'
import './topBarLandingPage.css'
import { TopBarNewMatchesButton } from './TopBarNewMatchesButton/TopBarNewMatchesButton'

export const TopBarLandingPage =
  (): ReactElement => {

    return (<div
      className="top_bar_landing_page_container"
    >
      <TopBarNewMatchesButton />
      <TopBarSignUpButton />
      <TopBarLandingPageLogInButton />

    </div>)
  }