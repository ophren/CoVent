import { FirebaseReducer } from "react-redux-firebase";
import { SystemState } from "./systemTypes";
import { User } from "./userTypes";

export interface RootState  {
  system: SystemState,
  user:User,
 
}