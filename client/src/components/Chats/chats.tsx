import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { Link } from 'react-router-dom';

export const Chats = () => {

  const currentUser = useSelector((state: RootState) => state.user)

  return (
    <>
      <h1>Hello From Chats</h1>
      {console.log('currentUser-->', currentUser)}

      {
        currentUser.profile &&
        currentUser.profile.matched &&
        currentUser.profile.matched.map((el, i) =>
          <div key={i} className="match">
            <Link to= {{
              pathname:  '/chat',
              state: {
                profile: el.picture,
                id: el.id,
                firstName: el.user?.firstName
              }
            }}>
            <img src={el.picture} className="match__chat" alt="match chat" />
            </Link>
          </div>
        )}
    </>
  )
}