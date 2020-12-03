import { SystemActionTypes } from './../types/systemTypes';


import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { getUserById, registerUserToDataBase } from './userDatabaseFetch';

export const userLogin = (creds: any) => {
    return (dispatch: any) => {
        fire
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                dispatch(setUserFirebaseId(res.user?.uid));
                dispatch(setUserToLoggedIn());



                // dispatch(setUserState (getUserById(res.user?.uid)))
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const userLogOut = () => {
    return (dispatch:Dispatch<SystemActionTypes>) => {

        fire.auth().signOut().then(function() {
            dispatch(setUserToLoggedOut())
        }).catch(function(error) {
            // An error happened.
        });
    }
}

export const userSignUp = (creds: any) => {
    console.log('hello worls', creds)
    return (dispatch: any) => {
        fire
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                console.log(res.user?.uid, ' Firebase res')
                dispatch(setUserFirebaseId(res.user?.uid));
                dispatch(setUserToLoggedIn());


            })
            .catch(err => {
                console.log(err)
            });
    };
};