import { User, UserActionTypes, SET_USER_AGE, SET_USER_NAME, } from '../../types/userTypes';




const initialUserState: User ={
  id: 2,
  firstName: "Till",
  lastName: "Schmidt",
  email: "schmidt@gmail.com",
  profile: {
      id: 2,
      picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
      age: "33",
      gender: "male",
      location: "mountains and beaches",
      userId: 2,
      categories: [
          {
              id: 2,
              name: "MDMA",
              createdAt: "2020-12-01T14:40:23.086Z",
              updatedAt: "2020-12-01T14:40:23.086Z",
              categoryProfiles: {
                  createdAt: "2020-12-01T14:40:23.089Z",
                  updatedAt: "2020-12-01T14:40:23.089Z",
                  categoryId: 2,
                  profileId: 2
              }
          }
      ],
      likedProfile: [
          {
              id: 1,
              picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
              age: "30",
              gender: "male",
              location: "mountains",
              userId: 1,
              user: {
                  id: 1,
                  firstName: "Lucas",
                  lastName: "Erlacher",
                  email: "lucaserly@gmail.com"
              },
              likedProfiles: {
                  createdAt: "2020-12-02T17:14:55.575Z",
                  updatedAt: "2020-12-02T17:14:55.575Z",
                  likedProfile: 2,
                  givenLike: 1
              }
          }
      ],
      receivedLike: [
          {
              id: 1,
              picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
              age: "30",
              gender: "male",
              location: "mountains",
              userId: 1,
              user: {
                  id: 1,
                  firstName: "Lucas",
                  lastName: "Erlacher",
                  email: "lucaserly@gmail.com"
              },
              receivedLikes: {
                  createdAt: "2020-12-02T17:13:38.935Z",
                  updatedAt: "2020-12-02T17:13:38.935Z",
                  receivedLike: 2,
                  liked: 1
              }
          }
      ],
      matched: [
          {
              id: 1,
              picture: "https://ca.slack-edge.com/T0WU5R8NT-U015FNL1RQF-87fa8c57d5ca-512",
              age: "30",
              gender: "male",
              location: "mountains",
              userId: 1,
              user: {
                  id: 1,
                  firstName: "Lucas",
                  lastName: "Erlacher",
                  email: "lucaserly@gmail.com"
              },
              matches: {
                  createdAt: "2020-12-02T17:14:55.590Z",
                  updatedAt: "2020-12-02T17:14:55.590Z",
                  matched: 2,
                  partner: 1
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

