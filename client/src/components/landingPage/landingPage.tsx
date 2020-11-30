import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes';
import './landingPage.css'



export const LandingPage = (): ReactElement => {

  const user  =useSelector((state: RootState) => state.user) ;
  console.log(user)
  return (
    <div className="landing_page_container">
      {/* <Topbar className= "landing_page_top_bar"></Topbar> */}


hello


    </div>
  )
}