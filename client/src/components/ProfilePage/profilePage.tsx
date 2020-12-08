import React from 'react';
import { FormEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../types/combinedStoreTypes';
import { User } from "../../types/userTypes";
import { Button, Modal } from 'react-bootstrap';
import { profileUpdate, addCityToProfile, addCategoryToProfile } from '../../utils/systemFunction';
import { ProfileNew, CityAdd } from "../../types/userLucasTypes";
import './profilePage.css';
import { Link } from 'react-router-dom';
import { getAllProfiles } from './../../utils/userDatabaseFetch';
import { addLike } from './../../utils/systemFunction';

export const ProfilePage = () => {

  console.log('INSIDE PROFILE-->');
  const user = useSelector((state: RootState) => state.user)
  const currentDirection = useSelector((state: RootState) => state.direction)
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


  const categories = [
    'Athletics',
    'Ball Sports',
    'Beach Sports',
    'Body & Mind',
    'Cars',
    'City',
    'Climbing',
    'Combat Sports',
    'Cycling',
    'Dancing',
    'Equestrianism',
    'Fishing: Catch & Release',
    'Fitness',
    'For Fun',
    'Games',
    'Hiking',
    'Ice',
    'Motorcycles',
    'Multi-Sport',
    'Nature',
    'Party',
    'Photography',
    'Piloting',
    'Pool',
    'Racket Sports',
    'Radio-controlled Piloting',
    'Rowing',
    'Shooting',
    'Sky',
    'Slacklining',
    'Snow',
    'Strength',
    'Traveling',
    'Underwater',
    'Water',
    'Wildlife Viewing',
    'Wind'
  ]

  const [show, setShow] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [picture, setPicture] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const [profiles, setProfiles] = useState<ProfileNew[]>([]);

  useEffect(() => {
    getAllProfiles()
      .then((list) => {
        const filteredList = list.filter((el) => el.id !== user.id)
        setProfiles(filteredList)
        filterProfilesToShowExceptSwipedOnes(user, list)
        if (currentDirection.length && user.profile && user.profile.id) {
          sendLikesToBackEnd(currentDirection, user.profile.id)
        }
      })
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseCity = () => setShowCityModal(false);
  const handleShowCity = () => setShowCityModal(true);
  const handleShowCategory = () => setShowCategoryModal(true);
  const handleCloseCategory = () => setShowCategoryModal(false);

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
      dispatch(addCityToProfile(cityObj, user))
    }
  };

  const handleCategorySubmit = (ev: any): any => {
    console.log('e.target.value-->', ev.target.value);
    setCategory(ev.target.value)
    const categoryToSend = {
      profileId: user.profile && user.profile.id,
      name: ev.target.value
    }
    dispatch(addCategoryToProfile(categoryToSend, user))
  };

  const filterSwipedProfiles = (profiles: ProfileNew[], currentDir: string[]): ProfileNew[] => {
    const result = [];
    for (let i = 0; i < profiles.length; i++) {
      let flag;
      for (let a = 0; a < currentDir.length; a++) {
        if (Number(currentDir[a].match(/\d+/g)) === profiles[i].id) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        result.push(profiles[i]);
      } else {
        flag = false;
      }
    }
    return result;
  };

  const sendLikesToBackEnd = (currentDir: string[], profileId: number): void => {
    currentDir.forEach((el) => {
      console.log('el profilePage.tsx, line 174 el: ', el);
      if (String(el.match(/[^\s]+/)) === 'right') {
        dispatch(addLike({
          profileId: profileId,
          givenLikeId: el.match(/\d+/g)
        }))
      }
    })
  }

  const filterProfilesToShowExceptSwipedOnes = (user: User, list: ProfileNew[]): void => {
    console.log('user profilePage.tsx, line 188 user: ', user);
    console.log('list profilePage.tsx, line 189 list: ', list);
    // create table in back end where you keep track of swiped profiles
    // user has many swipes ->  a swipe belongs to one user
  }

  return (
    <div id="profile_body">

      <div id="sidebar-swipes">
        <div id="sidebar-swipes-title">Swipe by categories</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <div className="profile_page_content">

        <div className="profile_page_header_container">

          <div id="profile-infos-picture">
            <div className="profile_page_image_container">
              <img className="profile_page_image" src={user.profile?.picture} alt="profile" />
            </div>

            <div id="user-infos">
              <div className="user_first_name">Benjamin</div>
              <div id="user-age">{user.profile && user.profile.age}</div>
              <div id="selected-city">Your city: {user && user.profile && user.profile.cities && user.profile.cities[0] && user.profile.cities[0].name}</div>
            </div>
          </div>

          <div id="top_right_corner_btn">
            <Button variant="primary" onClick={handleShow} className="profile_updatebutton">Edit Profile</Button>
            <Button variant="primary" onClick={handleShowCity} className="city_add">Pick a city</Button>
          </div>
        </div>

        <div id="profile-page-body">

          <div id="my-matches-area">
            <div id="my-matches-title">My matches</div>
            <div id="my-matches-list">
              <div id="test">test</div>
              <div id="test">test</div>
              <div id="test">test</div>
              <div id="test">test</div>
              <div id="test">test</div>
              <div id="test">test</div>
            </div>
          </div>

          <div id="invitations-grid-area">
            <div id="sent-invitations-area">
              Invitations sent: {user && user.profile && user.profile.likedProfile &&
                user.profile.likedProfile[0] && user.profile.likedProfile[0].user
                && user.profile.likedProfile.map(el => el.user && el.user.firstName)}
            </div>

            <div id="received-invitation-area">
              <div id="received-invitation-title">Invitations received: {user && user.profile && user.profile.receivedLike &&
                user.profile.receivedLike[0] && user.profile.receivedLike[0].user
                && user.profile.receivedLike.map(el => el.user && el.user.firstName)}
              </div>
              <Button id="accept-invitation-btn">Accept</Button>
              <Button id="reject-invitation-btn">Decline</Button>
            </div>
          </div>        
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

      <div id="select-category-area">
        <select id="mySelect" onChange={(e) => { handleCategorySubmit(e) }}>
          {categories.map((el, i) => {
            return <option key={i} value={el}>{el}</option>
          })
          }
        </select>

        <Link to={{
          pathname: '/swiping',
          state: {
            profiles: currentDirection.length === 0 ? profiles : filterSwipedProfiles(profiles, currentDirection)
          }
        }}>
        </Link>
      </div>
    </div>
  )
}