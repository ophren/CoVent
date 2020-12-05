import { Category, GiveLike, ReceivedLike } from './../types/userTypes';
import { Profile, User } from "../types/userTypes";
import { UserL, City, ProfileNew } from "../types/userLucasTypes";

const baseUrl = "http://localhost:3002";

export const getAllUsers = (): Promise<UserL[]> => {
  return fetch(`${baseUrl}/users`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}

export function getUserByEmailAndPassword(email: string, password: string): Promise<User> {
  const user: User = {
    email,
    password
  }
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
}
export function getUserById(id: string): Promise<User[]> {
  return fetch(`${baseUrl}/user/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((res) => res.json());
}

export function registerUserToDataBase(user: User): Promise<User> {
  const userAdoped: User = {
    firstName: user.firstName, lastName: user.lastName,
    email: user.email, password: user.password
  }
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userAdoped),
  }).then((res) => res.json());
}

export function addProfileToUserAtDataBase(profile: Profile): any {
  return fetch(`${baseUrl}/profile`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile),
  }).then((res) => {
    if (res.status === 204) {
      return res;
    } else {
      res.json()
    }
  });
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

export const updateUserProfileData = (updatedUserProfile: Profile): any => {
  return fetch(`${baseUrl}/profile`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUserProfile),
  }).then((res) => res);
}

export const getAllCities = (): Promise<City[]> => {
  return fetch(`${baseUrl}/cities`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}

export const getAllProfiles = (): Promise<ProfileNew[]> => {
  return fetch(`${baseUrl}/profiles`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}