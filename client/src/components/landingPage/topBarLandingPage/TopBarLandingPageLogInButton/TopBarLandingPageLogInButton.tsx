import { userInfo } from 'os'
import './TopBarLandingPageLogInButton.css'
import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../types/combinedStoreTypes'
import { userLogin, userLogOut } from '../../../../utils/systemFunction'

const USER_LOGGED_IN_TEXT = 'Log In'
const USER_LOGGED_OUT_TEXT = 'Log Out'
const buttonClassName = 'log_in_button'

interface TopBarSignInButtonProp {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopBarLandingPageLogInButton = ({ setShowModal }: TopBarSignInButtonProp): ReactElement => {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector((state: RootState) => state.system.loggedIn)

  function handleLogOut() {
    dispatch(userLogOut())
  }

  function displayModal() {
    setShowModal(true);
  }

  return (
    <div className="log_in_button_container">
      {userLoggedIn
        ? <button id="logout-btn" onClick={handleLogOut}>{USER_LOGGED_OUT_TEXT}</button>
        : <button id="login-btn" onClick={displayModal}>{USER_LOGGED_IN_TEXT}</button>
      }
    </div>
  )
}

