import React from 'react';
import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { Profile, User } from "../../types/userTypes";
import { Button, Modal } from 'react-bootstrap';

import './profilePage.css'

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch();

  const initialState = {
    picture: '',
    description: '',
    age: '',
    gender: '',
    location: '',
  }

  console.log('INSIDE PROFILE-->');
  console.log('user-->', user);

  const [newUserDescription, setNewUserDescription] = useState<Profile>(initialState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {

  // }

  const handleSubmit = (e: FormEvent) => {
    console.log('e-->', e);
  }

  return (
    <>
      <div className="profile_page_container">
        <div className="profile_page_header_container">

          <div>Hello {user.firstName} </div>

          <div>{user.profile && user.profile.age} </div>

          <div className="profile_page_image_container">
            <img className="profile_page_image" src={user.profile?.picture} alt="profile" />
          </div>

          <div>
            <Button variant="primary" onClick={handleShow} className="profile_updatebutton">
              Edit Profile
              </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Edit Your Profile</Modal.Title>
                <Modal.Body>
                  <form>
                    <input name="picture" id="" placeholder="Picture"></input>
                    <input name="description" id="" placeholder="Description"></input>
                    <input name="age" id="" placeholder="Age"></input>
                    <input name="gender" id="" placeholder="Gender"></input>
                    <input name="location" id="" placeholder="Location"></input>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={(e) => {
                    handleSubmit(e)
                    handleClose()
                  }}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal.Header>

            </Modal>

          </div>


        </div>
      </div>
    </>
  )
}