import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../types/combinedStoreTypes'
import './TopBarNewMatchesButton.css'

const USER_MATCHES_BUTTON_TEXT = 'Machtes'


export const TopBarNewMatchesButton = () => {
  let userIsLoggedIn = useSelector((state: RootState) => state.system.loggedIn)
  let userHasNewMatches = useSelector((state: RootState) => state.user.profile?.hasNewMatch)
  let changeOnNewMatches = userHasNewMatches ? 'hasNewMatches top_bar_new_matches_button' : 'NoNewMatches top_bar_new_matches_button'



  return (<div

    className="top_bar_new_matches_button_container" >
    {userIsLoggedIn && <button
      className={changeOnNewMatches}>{USER_MATCHES_BUTTON_TEXT}</button>}
  </div>)
}