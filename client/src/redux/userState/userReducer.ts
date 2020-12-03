import { User, UserActionTypes, SET_USER_AGE, SET_USER_NAME, } from '../../types/userTypes';




const initialUserState: User ={
  
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

