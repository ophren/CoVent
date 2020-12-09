import { Category, GiveLike, ReceivedLike } from './../types/userTypes';
import { Profile, User } from "../types/userTypes";
import { UserL, City, ProfileNew, CityAdd } from "../types/userLucasTypes";
const baseUrl = "http://localhost:3002";

export const getAllUsers = (): Promise<UserL[]> => {
  return fetch(`${baseUrl}/users`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

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
};

export const getAllCities = (): Promise<City[]> => {
  return fetch(`${baseUrl}/cities`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
};

export const getAllProfiles = (): Promise<ProfileNew[]> => {
  return fetch(`${baseUrl}/profiles`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
};

export const addCity = (city: CityAdd): any => {
  return fetch(`${baseUrl}/city`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(city),
  }).then((res) => res.json());
};

export const giveLike = (like: any): any => {
  return fetch(`${baseUrl}/like/give`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(like),
  }).then((res) => res.json());
};

export const addCategory = (category: any): any => {
  return fetch(`${baseUrl}/category`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category),
  }).then((res) => res.json());
}

export const addSwipe = (swipe: any): any => {
  return fetch(`${baseUrl}/swipe`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(swipe)
  }).then((res) => res.json())
};

export const addMsg = (msg: any): any => {
  return fetch(`${baseUrl}/message`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(msg)
  }).then((res) => {
    if (res.status === 204) {
      return res;
    } else {
      res.json()
    }
  })
};

export const getAllMsgs = (): any => {
  return fetch(`${baseUrl}/messages`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}

export const getMsgByProfileId = (profileId: number): any => {
  return fetch(`${baseUrl}/messages/${profileId}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}

export const getMsgByReceivedId = (receivedId: number): any => {
  return fetch(`${baseUrl}/messages/received/${receivedId}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}

export const getMsgBySentId = (sentId: number): any => {
  return fetch(`${baseUrl}/messages/sent/${sentId}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}

export const getMsgsByProfileIdAndReceiverId = (profileId: number, receiverId: number): any => {
  return fetch(`${baseUrl}/messages/${profileId}/${receiverId}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json())
}
