import { userInfo } from 'os'
import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../types/combinedStoreTypes'
import { userLogin, userLogOut, addSwipeToProfile } from '../../../../utils/systemFunction'

const USER_LOGGED_IN_TEXT = 'Log In'
const USER_LOGGED_OUT_TEXT = 'Log Out'
const buttonClassName = 'log_in_button'
interface TopBarSignInButtonProp {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopBarLandingPageLogInButton = ({ setShowModal }: TopBarSignInButtonProp): ReactElement => {
  const dispatch = useDispatch()
  const userLoggedIn = useSelector((state: RootState) => state.system.loggedIn)
  const currentDirection = useSelector((state: RootState) => state.direction)
  const currentUser = useSelector((state: RootState) => state.user)

  function handleLogOut() {
    currentDirection.forEach((el) => {
      if (currentUser.profile) {
        const swipeToSend = {
          profileId: currentUser.profile.id,
          swipeId: el.match(/\d+/g)
        }
        console.log('TOP BAR INSIDE HANDLE LOGOUT-->');
        console.log('swipeToSend-->', swipeToSend);
        addSwipeToProfile(swipeToSend)
      }
    })
    dispatch(userLogOut())
  }

  function displayModal() {
    setShowModal(true);
  }

  return (
    <div className="log_in_button_container">
      {userLoggedIn
        ? <button className={buttonClassName} onClick={handleLogOut}>{USER_LOGGED_OUT_TEXT}</button>
        : <button className={buttonClassName} onClick={displayModal}>
          {USER_LOGGED_IN_TEXT}
        </button>
      }
    </div>
  )
}

