import React, { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes';
import './landingPage.css'
import { useDispatch } from 'react-redux'
import { setUserName } from '../../redux/userState/userActions';
import { TopBarLandingPage } from './topBarLandingPage/topBarLandingPage';
import { Searchbar } from './searchbar/searchbar';
import { ProfilePage } from '../ProfilePage/profilePage';
import { getUserByIdDispatch } from '../../utils/userFunction';
import { registerUserToDataBase } from '../../utils/userDatabaseFetch';


export const LandingPage = (): ReactElement => {
  const dispatch = useDispatch()


  const firebaseUser = useSelector((state: RootState) => state.system)
  const currentUser = useSelector((state:RootState) => state.user)
  // const user
  // if(firebaseUser.newUser) registerUserToDataBase(firebaseUser)
  // if(firebaseUser.loggedIn && firebaseUser.userFirebaseId) {
  //   dispatch(getUserByIdDispatch(firebaseUser.userFirebaseId))

  // }



  // const dispatch = useDispatch()
  // const user = useSelector((state: RootState) => state.user);
  // dispatch(setUserName('Peter'))


  return (
    <>
    <div className="landing_page_container">
      {/* {console.log(currentUser, 'current user from landingpage')} */}
      <TopBarLandingPage />
      <Searchbar />
    </div>
      <Searchbar />
    </>
  )
};