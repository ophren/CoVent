import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { SystemState, SystemActionTypes, SET_USER_FIREBASE_ID, SET_USER_AS_LOGGED_IN, SET_USER_AS_LOGGED_OUT } from './../../types/systemTypes';


export function setUserFirebaseId(firebaseId: string | undefined): SystemActionTypes {
  return {
    type: SET_USER_FIREBASE_ID,
    payload: firebaseId  
  }
}
export function setUserToLoggedIn(): SystemActionTypes {
  return {
    type: SET_USER_AS_LOGGED_IN,
    payload: true
  }
}
export function setUserToLoggedOut( ): SystemActionTypes {
  return {
    type: SET_USER_AS_LOGGED_OUT,
    payload: false
  }
}
