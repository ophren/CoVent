import { SystemActionTypes } from './../types/systemTypes';
import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { addProfileToUserAtDataBase, getUserById, registerUserToDataBase, getUserByEmailAndPassword } from './userDatabaseFetch';
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
                getUserByEmailAndPassword(creds.email, creds.password).then(updatedUser => {
                    if (updatedUser.id) {
                        getUserById(updatedUser.id.toString()).then(user => {
                            const newUser = user[0]
                            dispatch(setUser(newUser))
                        })
                    }
                })
            })
            .catch(err => {
                alert(err)
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
    return (dispatch: any) => {
        if (user.email && user.password) {
            fire
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((firebaseUser) => {
                    dispatch(setUserFirebaseId(firebaseUser.user?.uid));
                    dispatch(setUserToLoggedIn());
                    registerUserToDataBase(user).then(registeredUser => {
                        if (registeredUser.id) {
                            if (user.profile) {
                                user.profile.userId = Number(registeredUser.id);
                                addProfileToUserAtDataBase(user.profile)
                                    .then(one => {
                                        if (user.id) {
                                            getUserById(user.id.toString()).then(updatedUser => {
                                                dispatch(setUser(updatedUser[0]))
                                            })
                                        }
                                    })
                            }
                        }
                    }).catch(e => console.log(e))
                })
                .catch(err => {
                    console.log(err)
                });
        }
    };
};