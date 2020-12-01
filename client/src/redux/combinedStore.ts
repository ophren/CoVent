import { combineReducers } from 'redux'
import { firebaseReducer} from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { systemReducer } from './systemState/systemReducer';
import { userReducer } from './userState/userReducer';
import authReducer from "../utils/authReducer";

const rootReducer = combineReducers({
  system: systemReducer,
  user: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
})

export default rootReducer;
