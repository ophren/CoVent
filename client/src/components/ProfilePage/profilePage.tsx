import React from 'react';
import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { Profile, User } from "../../types/userTypes";
import { Button, Modal } from 'react-bootstrap';
import { setUser } from "../../redux/userState/userActions";
import { profileUpdate } from '../../utils/systemFunction';



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
  const [picture, setPicture] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>, cb: any) => {
    cb(ev.target.value)
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (user && user.profile) {
      const newUs: User = {
        ...user, profile: {
          userId: user.id,
          picture: picture !== "" ? picture : user.profile.picture,
          description: description !== "" ? description : user.profile.description,
          age: age !== "" ? age : user.profile.age,
          gender: gender !== "" ? gender : user.profile.gender,
          location: location !== "" ? location : user.profile.location,
        }
      }
      dispatch(profileUpdate(newUs))
    }
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
                    <input name="picture" id="" placeholder="Picture" onChange={(e) => {
                      handleChange(e, setPicture)
                    }}></input>
                    <input name="description" id="" placeholder="Description" onChange={(e) => {
                      handleChange(e, setDescription)
                    }}></input>
                    <input name="age" id="" placeholder="Age" onChange={(e) => {
                      handleChange(e, setAge)
                    }}></input>
                    <input name="gender" id="" placeholder="Gender" onChange={(e) => {
                      handleChange(e, setGender)
                    }}></input>
                    <input name="location" id="" placeholder="Location" onChange={(e) => {
                      handleChange(e, setLocation)
                    }}></input>
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