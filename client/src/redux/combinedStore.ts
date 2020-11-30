import { combineReducers } from 'redux'
import { systemReducer } from './systemState/systemReducer'
import { userReducer } from './userState/userReducer'
import { createStore } from 'redux'


const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer
})

type RootState = ReturnType<typeof rootReducer>

 export const  store = createStore(rootReducer)