import { applyMiddleware, combineReducers } from 'redux'
import { systemReducer } from './systemState/systemReducer'
import { userReducer } from './userState/userReducer'
import { createStore } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
})

 export const store = createStore(rootReducer, applyMiddleware(thunk))
