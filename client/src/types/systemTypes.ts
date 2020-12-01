export interface SystemState {
  loggedIn: boolean,
  session: string,
  userName: string,
  userFirebaseId: string
}

export interface SystemStateLoggedIn {
  loggedIn: boolean,
  userFirebaseId: string
}

///redux action Types
export const UPDATE_SESSION = 'UPDATE_SESSION'
export const UPDATE_LOGIN = 'UPDATE_LOGIN'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction