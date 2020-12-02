import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../../../types/combinedStoreTypes';
import { Profile, User, UserL } from './../../../types/userTypes';
import { getAllUsers } from './../../../utils/userDatabaseFetch';


// interface Categories {
//   name: string,
// }

// interface LikedProfile {
//   [index: number]: {
//     age: string,
//     gender: string,
//     id: number,
//     likedProfiles: {
//       createdAt: string,
//       givenLike: number,
//       likedProfile: number,
//       updatedAt: string
//     },
//     location: string,
//     picture: string,
//     user: User,
//   },
//   userId: number
// }

// interface Matched {
//   [index: number]: {
//     age: string,
//     gender: string,
//     id: number,
//     location: string,
//     matches: {
//       createdAt: string,
//       matched: number,
//       partner: number,
//       updatedAt: string
//     },
//     picture: string,
//     user: {
//       email: string,
//       firstName: string,
//       id: number,
//       lastName: string
//     },
//     userId: number,
//   }
// }

// interface ReceivedLike {
//   [index: number]: {
//     age: string,
//     gender: string,
//     id: number,
//     location: string,
//     picture: string,
//     receivedLikes: {
//       createdAt: string,
//       liked: number,
//       receivedLike: number,
//       updatedAt: string
//     },
//     userId: number,
//   }
// }

// interface Profile {
//   age: string,
//   categories: Categories,
//   gender: string,
//   id: number,
//   likedProfile: LikedProfile,
//   location: string,
//   matched: Matched,
//   picture: string,
//   receivedLike: ReceivedLike,
//   userId: number,
// }

// interface User {
//   email: string,
//   firstName: string,
//   id: number,
//   lastName: string,
//   profile: Profile,
// }



export const Searchbar = (): ReactElement => {

  // const user = useSelector((state: RootState) => state.user);

  const [users, setUsers] = useState<UserL[]>([])

  useEffect(() => {
    getAllUsers()
      .then((list) => {
        // console.log('list-->', list);
        setUsers(list)
      })
  }, []);

  console.log('users-->', users);


  return (

    <div>
      <form>
        <input type="text" placeholder="city" />
        <input type="text" placeholder="category" />
        <button type="submit">Search</button>
        <div>
          <ul>
            {users.map((el, i) => {
              console.log('el-->', el);
              return <li key={i}>{el.firstName}</li>
            }
            )}
          </ul>
        </div>
      </form>
    </div>

  )

}