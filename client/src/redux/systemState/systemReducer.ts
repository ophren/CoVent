import { SystemState, SystemActionTypes, UPDATE_SESSION } from './../../types/systemTypes';

const initialSystemState: SystemState = {

  loggedIn: true,
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