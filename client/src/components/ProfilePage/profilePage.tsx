import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes'
import './profilePage.css'

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user)

  console.log('profile page')

  return (

    <div className="profile_page_container">
      <div className="profile_page_header_container">
        <div>Hello {user.firstName} </div>
        <div>{user.profile && user.profile.age} </div>
        <div className="profile_page_image_container">
          <img className="profile_page_image" src={user.profile?.picture} alt="profile" />
        </div>
      </div>
    </div>
  )


}