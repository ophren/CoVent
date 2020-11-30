import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes'

const USER_LOGGED_IN_TEXT = 'Log In'
const USER_LOGGED_OUT_TEXT = 'Log Out'


export const TopBarLandingPageLogInButton = (): ReactElement => {
let userLoggedIn = useSelector((state:RootState) => state.system.loggedIn)  



  return (
    <div>
      {userLoggedIn
        ? <button onClick="logout functio">{USER_LOGGED_OUT_TEXT}</button>
      : <button onClick="">{USER_LOGGED_IN_TEXT}</button>
      }
    </div>
  )



}

