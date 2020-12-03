import { SystemActionTypes } from './../types/systemTypes';
import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { getUserById, registerUserToDataBase } from './userDatabaseFetch';
import { User } from '../types/userTypes';

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
    return (dispatch: Dispatch<SystemActionTypes>) => {

        fire.auth().signOut().then(function () {
            dispatch(setUserToLoggedOut())
        }).catch(function (error) {
            console.log(error)
        });
    }
}
let currentUser 

export const userSignUp = (user:User) => {
    console.log('system func firebase sign upx')
    return (dispatch: any) => {
        if(user.email&& user.password) {

            fire
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                console.log(res.user?.uid, ' Firebase res')
                dispatch(setUserFirebaseId(res.user?.uid));
                dispatch(setUserToLoggedIn());
                registerUserToDataBase(user).then(user=>{
                    console.log('registered user: ' , user.firstName)
                }).catch(e=> console.log(e))
                
            })
            .catch(err => {
                console.log(err)
            });
        }
    };
};