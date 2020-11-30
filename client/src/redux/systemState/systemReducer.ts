import { SystemState, SystemActionTypes, UPDATE_SESSION } from './../../types/systemTypes';

const initialSystemState: SystemState = {

  loggedIn: false,
  session: '',
  userName: '',
  userFirebaseId: ''

}

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