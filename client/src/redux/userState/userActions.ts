import { SET_USER } from './../../types/userTypes';
import { SET_USER_NAME, SET_USER_AGE, UserActionTypes, User } from '../../types/userTypes';

export function setUser(user: User): UserActionTypes {
  return {
    type: SET_USER,
    payload: user
  }
}
export function setUserName(newName: string): UserActionTypes {
  return {
    type: SET_USER_NAME,
    payload: newName
  }
}

// export function setUserDescription(userDescription: User): UserActionTypes {
//   return {
//     type: SET_USER_AGE,
//     payload: newAge
//   }
// }

export function setUserProfilePic(newAge: number): UserActionTypes {
  return {
    type: SET_USER_AGE,
    payload: newAge
  }
}



