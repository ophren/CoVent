import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { Link } from 'react-router-dom';
import './chats.css';

export const Chats = () => {

  const currentUser = useSelector((state: RootState) => state.user)

  return (
    <>
      <div id="chat-title">The CoVent Chat</div>
      <div id="chat-subtitle">Join the conversation with one of your matches</div>
      <div id="matches-list">

      {
        currentUser.profile &&
        currentUser.profile.matched &&
        currentUser.profile.matched.map((el, i) =>
        <div id="match-person-area" key={i}>
          
          <div  >
            <Link to= {{
              pathname:  '/chat',
              state: {
                profile: el.picture,
                id: el.id,
                firstName: el.user?.firstName
              }
            }}>
            <img src={el.picture} id="match-chat-picture" alt="match chat" />
            
            </Link>
          </div>
          <div id="match-name">{el.user?.firstName}</div>
        </div>
        )}
      </div>
    </>
  )
}