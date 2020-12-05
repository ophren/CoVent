import { SystemActionTypes } from './../types/systemTypes';
import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import { addProfileToUserAtDataBase, getUserById, registerUserToDataBase, getUserByEmailAndPassword, updateUserProfileData, addCity } from './userDatabaseFetch';
import { User, Profile } from '../types/userTypes';
import { setUser } from '../redux/userState/userActions';
import { UserL, City, ProfileNew, CityAdd } from "../types/userLucasTypes";


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
    return (dispatch: any) => {
        fire.auth().signOut().then(function () {
            dispatch(setUserToLoggedOut())
            dispatch(setUser({
                id: 0,
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                profile: {
                    age: '',
                    description: '',
                    gender: '',
                    location: '',
                    picture: '',
                    userId: 0,
                }
            }))
        }).catch(function (error) {
            console.log(error)
        });
    }
};

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
                                    .then(() => {
                                        if (user.profile && user.profile.userId) {
                                            getUserById(user.profile.userId.toString()).then(updatedUser => {
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

export const profileUpdate = (user: User) => {
    return (dispatch: any) => {
        if (user && user.profile) {
            updateUserProfileData(user.profile)
                .then(() => {
                    console.log('INSIDE SYSTEM PROFILE-->');

                    console.log('user-->', user);

                    dispatch(setUser(user))
                })
        }
    }
}

export const addCityToProfile = (city: CityAdd, user: User) => {
    console.log('INSIDE SYSTEM ADD CITY------->');
    return (dispatch: any) => {
        console.log('city-->', city);
        console.log('user-->', user);
        addCity(city)
            .then((el: any) => {
                console.log('el-->', el);
                if (user.profile && user.profile.cities) {
                    user.profile.cities[0] = el
                    console.log('user AFTER CITY HAS BEEN ADDED -->', user);

                    dispatch(setUser(user))
                }
            })
    }
}
