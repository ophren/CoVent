export interface SystemState {
  loggedIn: boolean,
  session?: string,
  userName?: string,
  userFirebaseId: string | undefined,
  userEmail?:string,
  newUser?:boolean,
  
}

export interface SystemStateLoggedIn {
  loggedIn: boolean,
  userFirebaseId: string
}

///redux action Types

export const SET_USER_FIREBASE_ID = 'SET_USER_FIREBASE_ID'
export const SET_USER_EMAIL= 'SET_USER_EMAIL'
export const SET_USER_AS_LOGGED_IN= 'SET_USER_AS_LOGGED_IN'
export const SET_USER_AS_LOGGED_OUT= 'SET_USER_AS_LOGGED_OUT'

export const SET_USER_NEW_USER_BOOLEAN = "SET_USER_NEW_USER_BOOLEAN"
interface SetUserNewUserBoolean{
  type: typeof SET_USER_NEW_USER_BOOLEAN
  payload: boolean
}
interface SetUserFirebaseId {
  type: typeof SET_USER_FIREBASE_ID
  payload: string | undefined
}
interface SetUserToLoggedIn {
  type: typeof SET_USER_AS_LOGGED_IN
  payload: boolean
}
interface SetUserToLoggedOut {
  type: typeof SET_USER_AS_LOGGED_OUT
  payload: boolean
}

export type SystemActionTypes = SetUserNewUserBoolean| SetUserFirebaseId | SetUserToLoggedIn | SetUserToLoggedOut