import {  SET_USER_NAME, SET_USER_AGE, UserActionTypes } from '../../types/userTypes';

export function setUserName(newName: string): UserActionTypes {
  return {
    type: SET_USER_NAME,
    payload: newName
  }

}

export function setUserAge(newAge: number): UserActionTypes {
  return {
    type: SET_USER_AGE,
    payload: newAge
  }
}
export function setUserProfilePic(newAge: number): UserActionTypes {
  return {
    type: SET_USER_AGE,
    payload: newAge
  }
}