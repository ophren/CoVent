import {
  SET_USER, SET_USER_NAME, SET_USER_AGE,
  UserActionTypes, User, SET_USER_DIRECTION
} from '../../types/userTypes';

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





