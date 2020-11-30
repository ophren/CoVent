import React, { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes';
import './landingPage.css'

import { useDispatch } from 'react-redux'
import { setUserName } from '../../redux/userState/userActions';





export const LandingPage = (): ReactElement => {

  // let userLoggedInWithFireBase = useSelector((state: RootState) => state.system.loggedIn)



  // const dispatch = useDispatch()
  // const user = useSelector((state: RootState) => state.user);
  // dispatch(setUserName('Peter'))


  return (
    <div className="landing_page_container">
      






    </div>
  )
}