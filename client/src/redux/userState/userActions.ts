import {  SET_USER_NAME, SET_USER_PROFILE, UserActionTypes } from '../../types/userTypes';

export function setUserName(newName: string): UserActionTypes {
  return {
    type: SET_USER_NAME,
    payload: newName
  }
}
 
export function setUserDescription(userDescription: User): UserActionTypes {
  return {
    type: SET_USER_PROFILE,
    payload: UPDATED_USER_IN_DESCRIPTION
  }
}

// export function setUserProfilePic(newAge: number): UserActionTypes {
//   return {
//     type: SET_USER_AGE,
//     payload: newAge
//   }
// }