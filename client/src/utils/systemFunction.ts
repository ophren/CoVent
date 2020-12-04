import { SystemActionTypes } from './../types/systemTypes';
import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { addProfileToUserAtDataBase, getUserById, registerUserToDataBase } from './userDatabaseFetch';
import { User } from '../types/userTypes';
import { setUser } from '../redux/userState/userActions';

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


export const userSignUp = (user: User) => {
    console.log('user-->', user);
    return (dispatch: any) => {
        if (user.email && user.password) {

            fire
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((firebaseUser) => {
                    // console.log(firebaseUser.user?.uid, ' Firebase res')
                    dispatch(setUserFirebaseId(firebaseUser.user?.uid));
                    dispatch(setUserToLoggedIn());
                    registerUserToDataBase(user).then(registeredUser => {
                        console.log('user.profile-->', user.profile);
                        console.log('registered user: ', user)
                        if (user.profile) {
                            user.profile.userId = Number(registeredUser.id);
                            console.log('user.profile-->', user.profile);
                            addProfileToUserAtDataBase(user.profile)
                            .then(one => {
                                if (user.id) {
                                    getUserById(user.id.toString()).then(user => console.log(user, 'user after getUserByID'))
                                }
                            })
                        }
                    }).catch(e => console.log(e))

                })
                .catch(err => {
                    console.log(err)
                });
        }
    };
};