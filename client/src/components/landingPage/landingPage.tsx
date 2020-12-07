import React, { ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes';
import './landingPage.css'
import { useDispatch } from 'react-redux'
import { setUserName } from '../../redux/userState/userActions';
import { TopBarLandingPage } from './topBarLandingPage/topBarLandingPage';
import { Searchbar } from './searchbar/searchbar';
import { ProfilePage } from '../ProfilePage/profilePage';
import { getUserByIdDispatch } from '../../utils/userFunction';
import { registerUserToDataBase } from '../../utils/userDatabaseFetch';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { getAllProfiles } from './../../utils/userDatabaseFetch';
import { ProfileNew, CityAdd } from "../../types/userLucasTypes";
import { addLike } from './../../utils/systemFunction';


export const LandingPage = (): ReactElement => {
  const dispatch = useDispatch()
  const firebaseUser = useSelector((state: RootState) => state.system)
  const currentUser = useSelector((state: RootState) => state.user)
  const currentDirection = useSelector((state: RootState) => state.direction)
  const user = useSelector((state: RootState) => state.user)


  const [profiles, setProfiles] = useState<ProfileNew[]>([]);

  useEffect(() => {
    getAllProfiles()
      .then((list) => {
        const filteredList = list.filter((el) => el.id !== user.id)
        setProfiles(filteredList)
        // filterProfilesToShowExceptSwipedOnes(user, list)
        if (currentDirection.length && user.profile && user.profile.id) {
          sendLikesToBackEnd(currentDirection, user.profile.id)
        }
      })
  }, []);

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

  return (
    <>
      <div className="landing_page_container">
        {console.log('current user from landingpage', currentUser,)}
        <TopBarLandingPage />
      </div>
      {currentUser.id ?

        <>
          <Searchbar key={Math.random()} />
          <Link to={{
            pathname: '/swiping',
            state: {
              profiles: currentDirection.length === 0 ? profiles : filterSwipedProfiles(profiles, currentDirection)
            }
          }}>
            <Button>Swiping</Button>
          </Link>
        </>
        :
        <>
          <Searchbar />
        </>
      }
    </>
  )
};