import { userInfo } from 'os'
import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../types/combinedStoreTypes'
import { userLogin, userLogOut } from '../../../../utils/systemFunction'

const USER_LOGGED_IN_TEXT = 'Log In'
const USER_LOGGED_OUT_TEXT = 'Log Out'
const buttonClassName = 'log_in_button'
interface TopBarSignInButtonProp {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopBarLandingPageLogInButton = ({setShowModal} : TopBarSignInButtonProp): ReactElement => {
  let userLoggedIn =
   useSelector((state: RootState) => state.system.loggedIn)
   
  

  function displayModal () {
    setShowModal(true);
  }

  return (
    <div className="log_in_button_container">
    {userLoggedIn
      ? <button className={buttonClassName} onClick={()=>userLogOut}>{USER_LOGGED_OUT_TEXT}</button>
      : <button className={buttonClassName} onClick= {displayModal}>
        {USER_LOGGED_IN_TEXT}
        </button>
    }
  </div>
  )



}

