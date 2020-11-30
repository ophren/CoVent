// https://www.youtube.com/watch?v=1pWsm4pBjkI
// TO DO (9:30) import authReducer.js in root reducer

import { toast } from "react-toastify"

const authReducer = (state={}, action) => {
    switch (action.type) {
        case "SIGN_IN":
            toast("Welcome back...");
            return state;
            case "SIGN_IN_ERR":
                toast.error(`Sign in error ${action.err.message}`)
                return state;
        
        case "SIGN_UP":
            toast("Yolo user created");
            return state;
            case "SIGN_UP_ERR":
                toast.error(`Sign up error ${action.err.message}`)
                return state;

        default: 
            return state;
    }
}

export default authReducer;