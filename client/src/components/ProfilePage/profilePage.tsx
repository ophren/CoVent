import React from 'react';
import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { Profile, User } from "../../types/userTypes";
import { Button, Modal } from 'react-bootstrap';
import { setUser } from "../../redux/userState/userActions";
import { profileUpdate, addCityToProfile } from '../../utils/systemFunction';
import { UserL, City, ProfileNew, CityAdd } from "../../types/userLucasTypes";
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

  const initialStateCity: CityAdd = {
    profileId: 0,
    name: ''
  }

  console.log('INSIDE PROFILE-->');


  // const [newUserDescription, setNewUserDescription] = useState<Profile>(initialState);
  const [show, setShow] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [picture, setPicture] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseCity = () => setShowCityModal(false);
  const handleShowCity = () => setShowCityModal(true);



  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>, cb: any) => {
    cb(ev.target.value)
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (user && user.profile) {
      const newUs: User = {
        ...user, profile: {
          age: age !== "" ? age : user.profile.age,
          categories: user.profile.categories,
          cities: user.profile.cities,
          description: description !== "" ? description : user.profile.description,
          gender: gender !== "" ? gender : user.profile.gender,
          hasNewMatch: user.profile.hasNewMatch,
          id: user.profile.id,
          likedProfile: user.profile.likedProfile,
          location: location !== "" ? location : user.profile.location,
          matched: user.profile.matched,
          picture: picture !== "" ? picture : user.profile.picture,
          receivedLike: user.profile.receivedLike,
          userId: user.id,
        }
      }
      dispatch(profileUpdate(newUs))
    }
  };

  const handleCitySubmit = (e: FormEvent) => {
    e.preventDefault()
    if (user.profile && user.profile.id) {
      const cityObj: CityAdd = {
        profileId: user.profile.id,
        name: city
      }
      console.log('city-->', city);
      console.log('cityObj-->', cityObj);
      dispatch(addCityToProfile(cityObj, user))
    }
  };

  return (
    <div id="profile_body">
     
      <div className="profile_page_container">

        <div className="profile_page_header_container">

          <div>
          <div className="user_first_name">Benjamin</div>
          <div>{user.profile && user.profile.age}</div>
          </div>

          <div className="profile_page_image_container">
            <img className="profile_page_image" src={user.profile?.picture} alt="profile" />
          </div>

          <div id="top_right_corner_btn">
            <Button variant="primary" onClick={handleShow} className="profile_updatebutton">Edit Profile</Button>
            <Button variant="primary" onClick={handleShowCity} className="city_add">Pick a city</Button>
          </div>
        </div>

        <div id="profile-page-body">
          <div id="selected-city">Your city: {user && user.profile && user.profile.cities && user.profile.cities[0] && user.profile.cities[0].name}</div>

          <div>Select activity first before going to matching</div>

          <div id="sent-invitations-area">
            Invitations sent: {user && user.profile && user.profile.likedProfile &&
            user.profile.likedProfile[0] && user.profile.likedProfile[0].user
            && user.profile.likedProfile.map(el => el.user && el.user.firstName) }
          </div>

          <div id="received-invitation-area">
            <div id="received-invitation-title">Invitations received: {user && user.profile && user.profile.receivedLike &&
                user.profile.receivedLike[0] && user.profile.receivedLike[0].user
                && user.profile.receivedLike.map(el => el.user && el.user.firstName) } 
            </div>
            <div></div>
            <Button id="accept-invitation-btn">Accept</Button>
            <Button id="reject-invitation-btn">Decline</Button>
          </div>  
{/* 
          <Button variant="primary" onClick={handleShowCity} className="city_add">
              Remove me
          </Button> */}

        </div>

            <Modal show={show} onHide={handleClose}>
            <div id="modal-background">
              <div id="edit-profile-modal-form">
              <Modal.Header>
                <Modal.Title id="edit-profile-title">Edit Your Profile</Modal.Title>
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
              </div>
              </div>
            </Modal>


          <div>
            <Modal show={showCityModal} onHide={handleCloseCity}>
              <Modal.Header>
                <Modal.Title>Add your City</Modal.Title>
                <Modal.Body>
                  <form>
                    <input name="city" id="" placeholder="City" onChange={(e) => {
                      handleChange(e, setCity)
                    }}></input>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCity}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={(e) => {
                    handleCitySubmit(e)
                    handleCloseCity()
                  }}>
                    Select
                  </Button>
                </Modal.Footer>
              </Modal.Header>
            </Modal>

          </div>

        </div>
      

      <div>
            <Modal show={showCityModal} onHide={handleCloseCity}>
              <Modal.Header>
                <Modal.Title>Add your City</Modal.Title>
                <Modal.Body>
                  <form>
                    <input name="city" id="" placeholder="City" onChange={(e) => {
                      handleChange(e, setCity)
                    }}></input>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCity}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={(e) => {
                    handleCitySubmit(e)
                    handleCloseCity()
                  }}>
                    Select
                  </Button>
                </Modal.Footer>
              </Modal.Header>
            </Modal>

          </div>


    </div>
  )
}