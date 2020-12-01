import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../types/combinedStoreTypes'

const USER_SIGN_UP_TEXT = 'Sign Up'

interface TopBarSignUpButtonProp {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopBarSignUpButton = ({setShowModal} : TopBarSignUpButtonProp )=> {
  let userIsLoggedIn = useSelector((state: RootState) => state.system.loggedIn)
  let showSignUp = userIsLoggedIn || null

  function displayModal () {
    setShowModal(true);
  }

  function hideModal () {
    setShowModal(false);
  }

  return (
    <div className="top_bar_sign_up_button_container">
      {showSignUp ?? 
        <>
          <button className="top_bar_sign_up_button"
                  onClick={displayModal}
          >
            {USER_SIGN_UP_TEXT}
          </button>
        </>
      }
    </div>

  )


}