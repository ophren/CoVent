import { Category, GiveLike, ReceivedLike } from './../types/userTypes';
import { Profile, User } from "../types/userTypes";

const baseUrl = "http://localhost:3002";

export function getAllUsers(): Promise<User[]> {
  return fetch(`${baseUrl}/users`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}


export function getUserByEmailAndPassword(email: string, password:string): Promise<User> {
  return fetch(`${baseUrl}/login`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
export function getUserById(id: string): Promise<User> {
  return fetch(`${baseUrl}/user/${id}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}


export function registerUserToDataBase(user: User): Promise<User> {
  const userAdoped:User = {

    firstName: user.firstName, lastName: user.lastName,
    email: user.firebaseId, password: user.password

  }
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(userAdoped),
  }).then((res) => res.json());
}


export function addProfileToUserAtDataBase(profile: Profile): Promise<User> {
  return fetch(`${baseUrl}/profile`, {
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
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