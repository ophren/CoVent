import React, { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes';
import './landingPage.css'
import { useDispatch } from 'react-redux'
import { setUserName } from '../../redux/userState/userActions';
import { TopBarLandingPage } from './topBarLandingPage/topBarLandingPage';
import { Searchbar } from './searchbar/searchbar';
import { ProfilePage } from '../ProfilePage/profilePage';

export const LandingPage = (): ReactElement => {

  return (
    <>
    <div className="landing_page_container">
      <TopBarLandingPage />
    </div>
      <Searchbar />
    </>
  )
};