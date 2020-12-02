import fire from './fire';

export const userLogin = (creds: any) => {
    return (dispatch: any) => {
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

export const userLogOut = () => {
    console.log("logout function called")
}



export const userSignUp = (creds: any) => {
    return (dispatch : any) => {
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