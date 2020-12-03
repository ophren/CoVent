import React, { ReactElement, useState, useEffect, FormEvent } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from './../../../types/combinedStoreTypes';
import { UserL, City, ProfileNew } from './../../../types/userLucasTypes';
import { getAllUsers, getAllCities, getAllProfiles } from './../../../utils/userDatabaseFetch';
import './searchbar.css'

// const cityProfiles: City = {
//   id: '',
//   name: '',
//   profiles: []
// }

// const User: UserL = {
//   email: '',
//   firstName: '',
//   id: 0,
//   lastName: '',
//   hasNewMatch: false,
// }

// const initialStateProfiles: ProfileNew = {
//   id: 0,
//   picture: '',
//   description: '',
//   age: '',
//   location: '',
//   cities: [cityProfiles],
//   hasNewMatch: false,
//   createdAt: '',
//   updatedAt: '',
//   userId: 0,
//   cityProfiles: cityProfiles,
//   user: User,
// }


export const Searchbar = (): ReactElement => {




  const [users, setUsers] = useState<ProfileNew[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    getAllCities()
      .then((list) => {
        setCities(list)
      })

    getAllProfiles()
      .then((list) => {
        setUsers(list)
      })
  }, []);

  const filterCity = (arr: City[], city: string) => {
    return arr.filter((el) => el.name.toLowerCase().includes(city.toLowerCase()))
  };

  const handleChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCity(ev.target.value.toLowerCase());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCity(city)
    const filteredCity = filterCity(cities, city)
    if (filteredCity.length > 1) {
      setUsers(filteredCity.flatMap((el) => el.profiles))
    } else if (filteredCity.length === 1) {
      setUsers(filteredCity[0].profiles)
    } else {
      alert('There are no users in the selected city')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="city" value={city} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <div className="container">
        {users.filter(user => user.cities.length && user.cities[0].name.toLowerCase().includes(city)).map((el, i) => {
          return <div key={i} className="image_container">
            <img src={el.picture} className="searchbar_image" alt="profile pic" />
          </div>
        }
        )}
      </div>

    </div>
  )
};