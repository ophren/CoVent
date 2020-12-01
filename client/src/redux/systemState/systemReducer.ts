import { SystemState, SystemActionTypes, UPDATE_SESSION } from './../../types/systemTypes';

const initialSystemState: SystemState = {
  loggedIn: false, 
  session: '',
  userName: '',
  userFirebaseId: ''
}

// create action to toggle true/false in systemStateActions.js

export function systemReducer(
  state = initialSystemState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }

    default: return state
  }
}