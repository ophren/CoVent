

import { setUserFirebaseId, setUserToLoggedIn } from '../redux/systemState/systemStateActions';
import fire from './firebase';

export const userLogin = (creds: any) => {
    return (dispatch: any) => {
        fire
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                dispatch(setUserFirebaseId (res.user?.uid));
                dispatch(setUserToLoggedIn());
            })
            .catch(err => {
                dispatch({ type : "SIGN_IN_ERR", err});
            });
    };
};

export const userLogOut = () => {
    console.log("logout function called")
}

export const userSignUp = (creds: any) => {
    console.log('hello worls' , creds)
    return (dispatch : any) => {
        fire
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                console.log(res.user?.uid, ' Firebase res')
                dispatch(setUserFirebaseId (res.user?.uid));
                dispatch(setUserToLoggedIn());
            })
            .catch(err => {
                console.log(err)
            });
     };
};