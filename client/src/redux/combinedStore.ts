import { applyMiddleware, combineReducers, createStore } from 'redux'
import { firebaseReducer} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { systemReducer } from './systemState/systemReducer';
import { userReducer } from './userState/userReducer';
import authReducer from "../utils/authReducer";
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
export default store;
