import { User, UserActionTypes, SET_USER_AGE, SET_USER_NAME, } from '../../types/userTypes';




const initialUserState: User = {
    firebaseId: '342354',
    id: 1,
    firstName: "Lucas",
    lastName: "Erlacher",
    email: "lucaserly@gmail.com",
    profile: {
        id: 1,
        picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
        description: "italian fag",
        age: "30",
        gender: "male",
        location: "mountains",
        userId: 1,
        hasNewMatch: false,
        likedProfile: [
            {
                id: 2,
                picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
                description: "german fag",
                age: "33",
                gender: "male",
                location: "mountains and beaches",
                userId: 2,
                hasNewMatch: false,
                user: {
                    id: 2,
                    firstName: "Till",
                    lastName: "Schmidt",
                    email: "schmidt@gmail.com"
                },
                likedProfiles: {
                    createdAt: "2020-12-02T17:13:38.930Z",
                    updatedAt: "2020-12-02T17:13:38.930Z",
                    likedProfile: 1,
                    givenLike: 2
                }
            }
        ],
        receivedLike: [
            {
                id: 2,
                picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
                description: "german fag",
                age: "33",
                gender: "male",
                location: "mountains and beaches",
                userId: 2,
                hasNewMatch: false,
                user: {
                    id: 2,
                    firstName: "Till",
                    lastName: "Schmidt",
                    email: "schmidt@gmail.com"
                },
                receivedLikes: {
                    createdAt: "2020-12-02T17:14:55.579Z",
                    updatedAt: "2020-12-02T17:14:55.579Z",
                    receivedLike: 1,
                    liked: 2
                }
            }
        ],
        matched: [
            {
                id: 2,
                picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
                description: "german fag",
                age: "33",
                gender: "male",
                location: "mountains and beaches",
                userId: 2,
                hasNewMatch: false,
                user: {
                    id: 2,
                    firstName: "Till",
                    lastName: "Schmidt",
                    email: "schmidt@gmail.com"
                },
                matches: {
                    createdAt: "2020-12-02T17:14:55.592Z",
                    updatedAt: "2020-12-02T17:14:55.592Z",
                    matched: 1,
                    partner: 2
                }
            }
        ],
        categories: [
            {
                id: 1,
                name: "SOCCER",
                createdAt: "2020-12-01T14:35:32.360Z",
                updatedAt: "2020-12-01T14:35:32.360Z",
                categoryProfiles: {
                    createdAt: "2020-12-01T14:35:32.363Z",
                    updatedAt: "2020-12-01T14:35:32.363Z",
                    categoryId: 1,
                    profileId: 1
                }
            }
        ]
    }
}




export function userReducer(state = initialUserState, action: UserActionTypes) {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state, name: action.payload

            }
        case SET_USER_AGE:
            return {
                ...state, age: action.payload
            }


        default: return state
    }
}

