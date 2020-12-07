import { UserActionTypes, SET_USER_DIRECTION, CLEAR_USER_DIRECTION } from '../../types/userTypes';

export function setDirection(dir: string[]): UserActionTypes {
  return {
    type: SET_USER_DIRECTION,
    payload: dir
  }
}

export function clearDirection(dir: []): UserActionTypes {
  return {
    type: CLEAR_USER_DIRECTION,
    payload: dir
  }
}