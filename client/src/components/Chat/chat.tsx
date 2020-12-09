import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { getMsgsByProfileIdAndReceiverId, addMsg } from './../../utils/userDatabaseFetch';


export const Chat = (props: any): JSX.Element => {
  // console.log('props-->', props);
  const dispatch = useDispatch();

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
      console.log('messageToSend-->', messageToSend);
    }
  }

  return (
    <>
      {console.log('conversation-->', conversation)}
      <h1>Hello From Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          placeholder="Message"
          value={message}
          onChange={handleChange}
        ></input>
        <button
          id="sendMessage"
        >Send</button>
      </form>

      {conversation.map((el, i) => {
        console.log('el-->', el);
        return <p key={i}>{currentUser.profile && currentUser.profile.id && el.sentMessageId === currentUser.profile.id? currentUser.firstName : props.location.state.firstName}: {el.text}</p>
      })}
    </>
  )
}