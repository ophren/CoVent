import { SystemState, SystemActionTypes, SET_USER_FIREBASE_ID, SET_USER_AS_LOGGEG_IN, SET_USER_AS_LOGGEG_OUT } from './../../types/systemTypes';


export function setUserFirebaseId(firebaseId: string | undefined): SystemActionTypes {
  return {
    type: SET_USER_FIREBASE_ID,
    payload: firebaseId  
  }
}
export function setUserToLoggedIn(): SystemActionTypes {
  return {
    type: SET_USER_AS_LOGGEG_IN,
    payload: true
  }
}
export function setUserToLoggedOut( ): SystemActionTypes {
  return {
    type: SET_USER_AS_LOGGEG_OUT,
    payload: false
  }
}