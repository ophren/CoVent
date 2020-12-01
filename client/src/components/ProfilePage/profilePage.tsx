import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes'


export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user)
  
  console.log('profile page')

  return (

    

        <div>
          <div>Hello </div>
          {/* <div>
            <img className="profile_page_image" src={user.profilePic} alt="profile" />
          </div> */}
        </div>
     
  )


}