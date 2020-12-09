import { SystemActionTypes } from './../types/systemTypes';
import { Dispatch } from 'react';
import { setUserFirebaseId, setUserToLoggedIn, setUserToLoggedOut } from '../redux/systemState/systemStateActions';
import fire from './firebase';
import {
    addProfileToUserAtDataBase, getUserById,
    registerUserToDataBase, getUserByEmailAndPassword,
    updateUserProfileData, addCity, giveLike, addCategory,
    addSwipe, addMsg, getAllMsgs, getMsgByProfileId,
    getMsgByReceivedId, getMsgBySentId
} from './userDatabaseFetch';
import { User, Profile } from '../types/userTypes';
import { setUser } from '../redux/userState/userActions';
import { UserL, City, ProfileNew, CityAdd } from "../types/userLucasTypes";
import { setDirection, clearDirection } from './../redux/directionState/directionActions';


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
            dispatch(clearDirection([]))
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
                    dispatch(setUser(user))
                })
        }
    }
};

export const addCityToProfile = (city: CityAdd, user: User) => {
    return (dispatch: any) => {
        addCity(city)
            .then((el: any) => {
                if (user.profile && user.profile.cities) {
                    user.profile.cities[0] = el
                    dispatch(setUser(user))
                }
            })
    }
};

export const addLike = (like: any): any => {
    console.log('SYSTEM FUNC ADD LIKE-->');
    console.log('like-->', like);
    return (dispatch: any) => {
        giveLike(like)
            .then((newUser: any) => {
                dispatch(setUser(newUser[0]))
            })
    }
};

export const addCategoryToProfile = (category: any, user: User): any => {
    return (dispatch: any) => {
        addCategory(category)
            .then((activity: any) => {
                if (user.profile && user.profile.categories) {
                    if (!activity.error) {
                        user.profile.categories[0] = activity
                        dispatch(setUser(user))
                    }
                }
            })
    }
};

export const addSwipeToProfile = (swipe: any): any => {
    addSwipe(swipe);
};

