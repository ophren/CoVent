import { User } from "../types/userTypes";

const baseUrl = "http://localhost:3002/";

export function getAllUsers(): Promise<User[]> {
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
    method:"POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}


export function addProfileToUserAtDataBase(profile: Profile): Promise<User> {
  return fetch(`${baseUrl}/profile`, {
    method:"POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
/*     return fetch(`${baseUrl}/cool/${firstName}`, {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json()); */