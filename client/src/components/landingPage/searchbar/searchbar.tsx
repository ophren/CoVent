import React, { ReactElement, useState, useEffect, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../../../types/combinedStoreTypes';
import { UserL, City, ProfileNew } from './../../../types/userLucasTypes';
import { getAllUsers, getAllCities, getAllProfiles } from './../../../utils/userDatabaseFetch';
import { Button, Modal } from 'react-bootstrap';
import './searchbar.css'

export const Searchbar = (): ReactElement => {
  console.log('INSIDE SEARCHBAR-->');

  const currentUser = useSelector((state: RootState) => state.user)
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

  const handleSubmit = (e: FormEvent) => {
    console.log('fuck')
  }

  let renderUserWithCities;
  if (users[0] && users[0].cities) {
    renderUserWithCities = (
      users.filter(user => user.cities.length
        && user.cities[0].name.toLowerCase().includes(city)).map((el, i) => {
          return <div key={i} className="image_container">
            <img src={el.picture} className="searchbar_image" alt="profile pic" />
          </div>
        }
        )
    )
  }

  let renderAllUsers;
  if (users[0]) {
    renderAllUsers = (
      users.map((el, i) => {
        return <div key={i} className="image_container">
          <img src={el.picture} className="searchbar_image" alt="profile pic" onClick={handleShow} />
        </div>
      })
    )
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="city" value={city} onChange={handleChange} />
      </form>
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