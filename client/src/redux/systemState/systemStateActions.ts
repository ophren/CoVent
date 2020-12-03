import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { SystemState, SystemActionTypes, SET_USER_FIREBASE_ID, SET_USER_AS_LOGGED_IN, SET_USER_AS_LOGGED_OUT, SET_USER_NEW_USER_BOOLEAN } from './../../types/systemTypes';


//  interface User {
//    name:string,
//    age:number
//  }


// let hello = 'hello'
// function sayHello (arg :string, arg2:number, arg3:User):User {
// console.log(hello)
// return arg3
// }

// const user:User = {
//   name: 'Till',
//   age: 3

// }



export function setUserFirebaseId(firebaseId: string | undefined): SystemActionTypes {
  return {
    type: SET_USER_FIREBASE_ID,
    payload: firebaseId  
  }
}
export function setUserToLoggedIn(): SystemActionTypes {
  return {
    type: SET_USER_AS_LOGGED_IN,
    payload: true
  }
}
export function setUserToLoggedOut( ): SystemActionTypes {
  return {
    type: SET_USER_AS_LOGGED_OUT,
    payload: false
  }
}
export function setUserNewUserBoolean(newUserBool: boolean): SystemActionTypes {
  return {
    type: SET_USER_NEW_USER_BOOLEAN,
    payload: newUserBool
  }
}