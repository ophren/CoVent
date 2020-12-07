import { User, ReceivedLike } from './userTypes'

export interface CityAdd {
  profileId: number,
  name: string
}

export interface City {
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  profiles: ProfileNew[]
}

export interface ProfileNew {
  id: number,
  picture: string,
  description: string,
  age: string,
  location: string,
  cities: City[],
  hasNewMatch: boolean,
  createdAt: string,
  updatedAt: string,
  userId: number,
  cityProfiles: {
    createdAt: string,
    updatedAt: string,
    cityId: number,
    profileId: number,
  },
  user: UserL,
  categories: CategoriesL[]
}

export interface CategoriesL {
  name: string,
  id: number,
  createdAt: string,
  updatedAt: string
}

export interface LikedProfileL {
  [index: number]: {
    age: string,
    gender: string,
    id: number,
    likedProfiles: {
      createdAt: string,
      givenLike: number,
      likedProfile: number,
      updatedAt: string
    },
    location: string,
    picture: string,
    user: User,
  },
  userId: number
}

export interface MatchedL {
  [index: number]: {
    age: string,
    gender: string,
    hasNewMatch: boolean,
    id: number,
    location: string,
    matches: {
      createdAt: string,
      matched: number,
      partner: number,
      updatedAt: string
    },
    picture: string,
    user: {
      email: string,
      firstName: string,
      id: number,
      lastName: string
    },
    userId: number,
  }
}

export interface ReceivedLikeL {
  [index: number]: {
    age: string,
    gender: string,
    hasNewMatch: boolean,
    id: number,
    location: string,
    picture: string,
    receivedLikes: {
      createdAt: string,
      liked: number,
      receivedLike: number,
      updatedAt: string
    },
    userId: number,
  }
}

export interface ProfileL {
  age: string,
  categories: CategoriesL,
  gender: string,
  hasNewMatch: boolean,
  id: number,
  likedProfile: LikedProfileL,
  location: string,
  matched: MatchedL,
  picture: string,
  receivedLike: ReceivedLike,
  userId: number,
}

export interface UserL {
  email: string,
  firstName: string,
  id: number,
  lastName: string,
  profile: ProfileL,
  hasNewMatch: boolean,
}
