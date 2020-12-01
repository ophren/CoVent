import { SystemState, UPDATE_SESSION, SystemActionTypes } from './../../types/systemTypes';

export function updateSession(newSession: SystemState): SystemActionTypes {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  }
}

// export function updateLoginState (newLogin: SystemState): SystemActionTypes {
//   return {
//     type: UPDATE_LOGIN,
//     payload: newLogin
//   }
// }