import { SET_USER_FIREBASE_ID } from './../../types/userTypes';
import { SystemState, SystemActionTypes, SET_USER_AS_LOGGED_IN , SET_USER_AS_LOGGED_OUT } from './../../types/systemTypes';

const initialSystemState: SystemState = {

  loggedIn: false,
  session: '',
  userName: '',
  userFirebaseId: '' ,
  userEmail: '',
  

}

// create action to toggle true/false in systemStateActions.js

export function systemReducer(
  state = initialSystemState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case SET_USER_AS_LOGGED_IN:
      return {
        ...state,
        loggedIn:action.payload
      }
    case SET_USER_AS_LOGGED_OUT:
      return {
        ...state,
        loggedIn: false
      }
    case SET_USER_FIREBASE_ID:
      return {
        ...state,
        userFirebaseId: action.payload


      }
    default: return state
  }
}
