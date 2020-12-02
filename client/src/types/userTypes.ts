export interface User {
  id?:number,
  name: string,
  age: number,
  profilePic: string,
  oldMatchArray?: number[],
  newMatchArray?: number[],
  hasNewMatches : boolean
  profile?:Profile
}

export interface Profile {
  id?:number,
  description?:string
  picture?: string,
  age?: number,
  gender?:string,
  location?:string,
  userId:number,
  categories?: Category[],
  user?:User, //this is for the likedProfile structure 
  likedProfile?: User[],
  receivedLike?:User[],
  matched?:User[],
}

export interface Category {
  id?:number,
  name:string,
  createdAt?: string,
  updatedAt?:string,
  categoryProfiles?: CategoryProfiles
}

export interface GiveLike {
  profileId: number,
  givenLikeId:number
}

export interface ReceivedLike {
  profileId: number,
  receivedLikeId:number
}

export interface CategoryProfiles {
  createdAt?:string,
  updatedAt?:string,
  categoryId:1,
  profileId:1
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