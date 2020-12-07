import { City } from './userLucasTypes'


export interface User {
  firebaseId?:string
  id?:number,
  firstName?: string,
  lastName?: string,
  email?:string,
  profile?:Profile,
  password?:string
}

export interface Profile {
  id?:number,
  picture?: string,
  description?:string
  age?: string,
  gender?:string,
  location?:string, 
  userId?:number,
  hasNewMatch?:boolean
  likedProfile?: Profile[]

  user?:User, //this is for the likedProfile structure
  receivedLike?:Profile[],
  matched?:Profile[],
  categories?: Category[],
  likedProfiles?:LikedProfiles,
  receivedLikes? : ReceivedLikes,
  matches?: Matches
  cities?: City[]

}

export interface Matches {
  createdAt : string,
  updatedAt : string,
  matched: number,
  partner:number

}
export interface ReceivedLikes {
  createdAt : string,
  updatedAt : string,
  receivedLike: number,
  liked:number
}
export interface LikedProfiles {
  createdAt : string,
  updatedAt : string,
  likedProfile: number,
  givenLike:number

}

export interface Category {
  id?: number,
  name: string,
  createdAt?: string,
  updatedAt?: string,
  categoryProfiles?: CategoryProfiles
}

export interface GiveLike {
  profileId: number,
  givenLikeId: number
}

export interface ReceivedLike {
  profileId: number,
  receivedLikeId: number
}

export interface CategoryProfiles {
  createdAt?:string,
  updatedAt?:string,
  categoryId:number,
  profileId:number
}

//redux action types

export const SET_USER_FIREBASE_ID = 'SET_USER_FIREBASE_ID'
export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_AGE = 'SET_USER_AGE'
export const SET_USER_PROFILE_PIC = 'SET_USER_PROFILE_PIC'
export const SET_USER_HAS_MATCHES_TO_FALSE= 'SET_USER_HAS_MATCHES_TO_FALSE'
export const SET_USER = "SET_USER"
// export const SET_USER_AGE = 'SET_USER_AGE'

interface SetUserNameAction {
  type: typeof SET_USER_NAME,
  payload: string
}

interface SetUserAgeAction {
  type: typeof SET_USER_AGE,
  payload: number
}

interface SetUserAction {
  type:typeof SET_USER,
  payload:User
}


export type UserActionTypes = SetUserAgeAction | SetUserNameAction | SetUserAction