
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../types/combinedStoreTypes'

const USER_SIGN_UP_TEXT = 'Sign Up'


export const TopBarSignUpButton = () => {
  let userIsLoggedIn = useSelector((state: RootState) => state.system.loggedIn)
  let showSignUp = userIsLoggedIn || null

  return (
    <div className="top_bar_sign_up_button_container">

      {showSignUp ?? <button
        className="top_bar_sign_up_button">
          {USER_SIGN_UP_TEXT}
          </button>}
    </div>

  )


}