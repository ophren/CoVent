import { UserActionTypes, SET_USER_DIRECTION } from '../../types/userTypes';

export function directionReducer(state = [], action: UserActionTypes): any {
  switch (action.type) {
    case SET_USER_DIRECTION:
      return [
        ...state, ...action.payload,
      ]
    default: return state;
  }
}