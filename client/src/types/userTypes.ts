export interface User {

  name: string,
  age: number,
  profilePic: string,
  oldMatchArray?: number[],
  newMatchArray?: number[]

}




//redux action types

export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_AGE = 'SET_USER_AGE'

interface SetUserNameAction {
  type: typeof SET_USER_NAME,
  payload: string
}

interface SetUserAgeAction {
  type: typeof SET_USER_AGE,
  payload: number
}

export type UserActionTypes = SetUserAgeAction | SetUserNameAction