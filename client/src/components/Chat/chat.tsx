import React, { useState, FormEvent, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { getMsgsByProfileIdAndReceiverId, addMsg } from './../../utils/userDatabaseFetch';
import './chat.css';

export const Chat = (props: any): JSX.Element => {

  const currentUser = useSelector((state: RootState) => state.user)
  const [message, setMessage] = useState<string>('');
  const [conversation, setConversation] = useState<{
    id: number,
    text: string,
    createdAt: string,
    profileId: number,
    receivedMessageId: number,
    sentMessageId: number,
    updatedAt: string
  }[]>([]);

  useEffect(() => {
    if (currentUser.profile && currentUser.profile.id) {
      getMsgsByProfileIdAndReceiverId(currentUser.profile.id, props.location.state.id)
        .then((msgs: any) => {
          console.log('msgs-->', msgs);
          setConversation(msgs)
        })
    }
  }, [])

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setMessage(value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('message-->', message);
    if (currentUser && currentUser.profile) {
      const messageToSend = {
        text: message,
        profileId: currentUser.profile.id,
        targetId: props.location.state.id
      }
      const messageTosave = {
        id: Math.random(),
        text: message,
        profileId: Number(currentUser.profile.id),
        receivedMessageId: props.location.state.id,
        sentMessageId: Number(currentUser.profile.id),
        createdAt: 'from front end',
        updatedAt: 'from front end'
      }
      addMsg(messageToSend)
      setConversation([...conversation, messageTosave])
      setMessage('')
    }
  }

  return (
    <div id="chat-area">
      {console.log('conversation-->', conversation)}
    <div id="test">
      <form onSubmit={handleSubmit}>
        <input
          id= "chat-input-field"
          name="message"
          placeholder="New message"
          value={message}
          onChange={handleChange}
        ></input>
        <button id="sendMessageBtn">Send</button>
      </form>
    </div>
    
      <div id="chat-messages-area" >
        {conversation.map((el, i) => {
          console.log('el-->', el);
          return (
            <div id="chat-container" key={i}>
              <div id="userName">{
                currentUser.profile && currentUser.profile.id
                && el.sentMessageId === currentUser.profile.id ?
                  <div id="chatter-current-user">{currentUser.firstName}</div>
                  : <div id="chatter-other-user">{props.location.state.firstName}</div>}
              </div>
              
              <div id="chat">
                {
               currentUser.profile && currentUser.profile.id
                && el.sentMessageId === currentUser.profile.id ?
                  <div id="chat-message-box-current">{el.text}</div>
              : <div id="chat-message-box-other">{el.text}</div> 
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}