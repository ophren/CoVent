import React, { useState } from 'react';
import {signUp} from "./authActions";
import {connect} from "react-redux";

function SignUp (props) {
   
console.log(props);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleUserName (e) {
        setUserName(e.target.value);
    }

    function handlePassword (e) {
        setUserPassword(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.setIsLoggedIn(!props.isLoggedIn);
        props.signUp({email: userName, password: userPassword})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter User Name</label>
            <input onChange={handleUserName} />

            <label>Enter Password</label>
            <input onChange={handlePassword} />

            <button type="submit">Submit</button>
        </form>
    );
};


// adds the following function to props for the above function
// dispatch will pass the object to all reducers
const mapDispatchToProps = dispatch => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);