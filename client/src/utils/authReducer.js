import { toast } from "react-toastify"

const authReducer = (state=false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            toast("Welcome back...");
            console.log(!state)
            return !(state);
            case "SIGN_IN_ERR":
                toast.error(`Sign in error ${action.err.message}`)
                return state;
        
        case "SIGN_UP":
            toast("Yolo user created");
            console.log(!state)
            return !(state);
            case "SIGN_UP_ERR":
                toast.error(`Sign up error ${action.err.message}`)
                return state;

        default: 
            return state;
    }
}

export default authReducer;