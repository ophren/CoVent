import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';

export const Matches = () => {

  const currentUser = useSelector((state: RootState) => state.user)

  return (
    <>
      {console.log('currentUser-->', currentUser)}
      <h1>Hello From Matches</h1>

      {
        currentUser.profile &&
        currentUser.profile.matched &&
        currentUser.profile.matched.map((el, i) =>
          <div key={i} className="image_container">
            <img src={el.picture} className="searchbar_image" alt="profile pic" />
          </div>
        )}

    </>
  )
}