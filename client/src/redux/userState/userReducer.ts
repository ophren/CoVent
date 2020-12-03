import { User, UserActionTypes, SET_USER_AGE, SET_USER_NAME, } from '../../types/userTypes';

const initialUserState: User = {

  firebaseId: 834093,
  name: 'Till',
  age: 33,
  profilePic: 'https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512',
  oldMatchArray: [1, 2, 3],
  newMatchArray: [1, 2, 3, 4],
  hasNewMatches: true
}


export function userReducer(state = initialUserState, action: UserActionTypes) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state, name: action.payload

      }
    case SET_USER_AGE:
      return {
        ...state, age: action.payload
      }


    default: return state
  }
}

