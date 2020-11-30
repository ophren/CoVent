import React, { ReactElement } from 'react'
import { TopBarLandingPageLogInButton } from '../TopBarLandingPageLogInButton/TopBarLandingPageLogInButton'


export const TopBarLandingPage =
  (): ReactElement => {

    return (<div
      className="top_bar_landing_page_container"
    >
      <TopBarLandingPageLogInButton/>

    </div>)
  }