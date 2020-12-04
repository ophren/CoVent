import { SystemActionTypes } from './../types/systemTypes';
import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { addProfileToUserAtDataBase, getUserById, registerUserToDataBase, getUserByEmailAndPassword } from './userDatabaseFetch';
import { User } from '../types/userTypes';
import { setUser } from '../redux/userState/userActions';

export const userLogin = (creds: any) => {
    console.log('INSIDE LOGIN FRONT END-->',);

    return (dispatch: any) => {
        fire
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then((res) => {
                console.log('res-->', res);

                dispatch(setUserFirebaseId(res.user?.uid));
                dispatch(setUserToLoggedIn());
                getUserByEmailAndPassword(creds.email, creds.password).then(updatedUser => {
                    console.log('INSIDE EMAIL AND PASSWORD-->');
                    console.log('updatedUser[0]-->', updatedUser);

                    if (updatedUser.id) {
                        getUserById(updatedUser.id.toString()).then(user => {
                            console.log('user-->', user);
                            const newUser = user[0]
                            dispatch(setUser(newUser))
                        })
                    }
                })


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
    return (dispatch: any) => {
        if (user.email && user.password) {
            fire
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((firebaseUser) => {
                    dispatch(setUserFirebaseId(firebaseUser.user?.uid));
                    dispatch(setUserToLoggedIn());
                    registerUserToDataBase(user).then(registeredUser => {
                        console.log('RESPONSE FROM BACKEND-->', registeredUser);
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