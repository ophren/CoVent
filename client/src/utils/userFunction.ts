import { UserActionTypes } from './../types/userTypes';
import { Dispatch } from 'react';
import { setUser } from '../redux/userState/userActions';
import { SystemActionTypes } from '../types/systemTypes';
import { User } from "../types/userTypes"
import { getUserById } from './userDatabaseFetch';

export function getUserByIdDispatch(firebaseId : string ) {

  return (dispatch : Dispatch<UserActionTypes>) =>{
    getUserById(firebaseId).then(user=> {
      dispatch(setUser(user))
    })



  }

}

