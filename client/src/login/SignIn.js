import React, { useState } from 'react';
import {signIn} from "./authActions";
import {connect} from "react-redux";

function SignIn (props) {
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
        // props = the function below, passed as props to this function
        // 22 calls 43
        props.signIn({email: userName, password: userPassword})
    }

    function logOut(e) {
        props.setIsLoggedIn(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter User Name</label>
            <input onChange={handleUserName} />

            <label>Enter Password</label>
            <input onChange={handlePassword} />

            <button type="submit">Submit</button>
            <button onClick={logOut}>Log out</button>
        </form>
    );
};


// adds the following function to props for the above function
// dispatch will pass the object to all reducers
const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);