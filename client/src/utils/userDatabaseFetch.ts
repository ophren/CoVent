import { Category, GiveLike, ReceivedLike } from './../types/userTypes';
import { Profile, User, UserL } from "../types/userTypes";

const baseUrl = "http://localhost:3002";

export const getAllUsers = (): Promise<UserL[]>  => {
  return fetch(`${baseUrl}/users`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}


export function getUserById(id: number): Promise<User> {
  return fetch(`${baseUrl}/user/${id}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}


export function registerUserToDataBase(user: User): Promise<User> {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}


export function addProfileToUserAtDataBase(profile: Profile): Promise<User> {
  return fetch(`${baseUrl}/profile`, {
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
export function addCategoryToUserAtDataBase(category: Category): Promise<User> {
  return fetch(`${baseUrl}/category`, {
    method: "POST",
    body: JSON.stringify(category),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
export function giveLikeToOtherUser(giveLike: GiveLike): Promise<User> {
  return fetch(`${baseUrl}/like/give`, {
    method: "POST",
    body: JSON.stringify(giveLike),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
export function receivedLikeFromOther(receivedLike: ReceivedLike): Promise<User> {
  return fetch(`${baseUrl}/like/received`, {
    method: "POST",
    body: JSON.stringify(receivedLike),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}

export function updateUserProfileData(updatedUserProfile: Profile): Promise<void> {
  return fetch(`${baseUrl}/profile`, {
    method: "POST",
    body: JSON.stringify(updatedUserProfile),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}