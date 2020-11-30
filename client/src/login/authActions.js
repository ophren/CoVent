import fire from './fire';

export const signIn = (creds) => {
   
    return (dispatch) => {

        fire
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({type: "SIGN_IN"});
            })
            .catch(err => {
                dispatch({ type : "SIGN_IN_ERR", err});
            });
    };
};

export const signUp = (creds) => {
   
    return (dispatch) => {

        fire
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({type: "SIGN_UP"});
            })
            .catch(err => {
                dispatch({ type : "SIGN_UP_ERR", err});
            });
    };
};

//signInWithEmailAndPassword
// test@test.com, 123456
//createUser~