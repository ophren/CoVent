import { combineReducers } from 'redux'
import { systemReducer } from './systemState/systemReducer'
import { userReducer } from './userState/userReducer'
import { createStore } from 'redux'




const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer
})


 export const  store = createStore(rootReducer)