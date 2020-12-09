import React, { ReactElement, useState, useEffect, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../../types/combinedStoreTypes';
import { ProfileNew } from './../../../types/userLucasTypes';
import { getAllProfiles } from './../../../utils/userDatabaseFetch';
import { Button, Modal } from 'react-bootstrap';
import './searchbar.css'
import { addLike } from './../../../utils/systemFunction'

export const Searchbar = (): ReactElement => {

  const currentUser = useSelector((state: RootState) => state.user)
  const currentDirection = useSelector((state: RootState) => state.direction)

  const dispatch = useDispatch();

  const [users, setUsers] = useState<ProfileNew[]>([]);
  const [city, setCity] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllProfiles()
      .then((list) => {
        const filteredList = list.filter((el) => el.id !== currentUser.id)
        setUsers(filteredList)
      })
  }, []);

  const handleChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCity(ev.target.value.toLowerCase());
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLike = (e: FormEvent, id: number) => {
    e.preventDefault()
    if (currentUser.profile) {
      const like: any = {
        profileId: currentUser.profile.id,
        givenLikeId: id,
      }
      dispatch(addLike(like))
    }
  }

  let renderUserWithCities;
  let renderAllUsers;


  if (users[0] && users[0].cities) {
    renderUserWithCities = (
      users.filter(user => user.cities && user.cities.length
        && user.cities[0].name.toLowerCase().includes(city)).map((el, i) => {
          if (el && el.id) {
          return <div key={i} className="image_container">
            <img src={el.picture} className="searchbar_image" alt="profile pic" />
            <div id="lp-profile-description">
              <div id="user-description-text">{el.description}</div>
              <Button id="invitation-btn" onClick={(e) => { handleLike(e, Number(el.id)) }}>Interested</Button>
            </div>
          </div>
          }
        }
      )
    )
  }

  if (users[0]) {
    renderAllUsers = (
      users.map((el, i) => {
        if(el.user) {
        const temp = el.user.firstName?.charAt(0).toUpperCase() + el.user.firstName?.slice(1);

        return <div key={i} id="user-box">

          <div  className="image_container">
            <img src={el.picture} className="searchbar_image" alt="profile pic" onClick={handleShow} />
            <div id="user-name">{temp}</div>
          </div>

          <div id="lp-profile-description">
            <div id="user-description-text">{el.description}</div>
            <Button id="invitation-btn" onClick={(e) => { handleLike(e, Number(el.id)) }}>Interested</Button>
          </div>

        </div>

      }})
    )
  }

  return (
    <div>
      {/* {console.log('searchbar Current dir-->', currentDirection)} */}

    <div id="searchbar_area">
      <form>
        <input id="main-searchbar" type="text" placeholder="Browse all cities..." value={city} onChange={handleChange} />
      </form>
      <button id="search-btn">Go</button>
    </div>

      <div className="container">
        {!city ? renderAllUsers : renderUserWithCities}

        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Inspect Profile</Modal.Title>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
                  </Button>

            </Modal.Footer>
          </Modal.Header>

        </Modal>

      </div>
    </div>
  )
};