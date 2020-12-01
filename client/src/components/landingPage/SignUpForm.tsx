import './SignUpForm.css'
import React, { FormEvent, useState } from 'react';
import {userSignUp} from "../../utils/systemFunction";
import { useDispatch } from "react-redux";


export const SignUpForm = ({setShowModal}: any) : JSX.Element => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const creds = {email: "", password: ""};

    const handleUserName = (ev : React.ChangeEvent<HTMLInputElement>) => {
        setUserName(ev.target.value);
    }

    const handlePassword = (ev : React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(ev.target.value);
    }

    function closeModal () {
        setShowModal(false);
    }

    function handleSubmit (e : FormEvent) {
        e.preventDefault();
        creds.email = userName;
        creds.password = userPassword;
        dispatch(userSignUp(creds)); 
        setShowModal(false);
    }

    return (
        <div id="modal-main">
            <form id="modal" onSubmit={handleSubmit}>

                <input 
                    id="inputUserEmail" 
                    placeholder="Enter email" 
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void =>
                    handleUserName(ev)} >
                </input>

                <input 
                    id="inputUserPassword" 
                    placeholder="Enter password" 
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void =>
                        handlePassword(ev)} > 
                </input>

                <button id="submitSignUp">Submit</button>
                <div id="toggleToSignIn">Already have an account? <span>Sign in</span></div>
                <div id="close-modal" onClick={closeModal}>close</div>
            </form>
        </div>
    )
}

export default SignUpForm;



// adds the following function to props for the above function
// dispatch will pass the object to all reducers
// const mapDispatchToProps = (dispatch : Dispatch) => {
//     return {
//         signUp: (creds) => dispatch(userSignUp(creds))
//         // add one calling till's reducer to set loggedIn state to true 
//     }
// }

// export default connect(null, mapDispatchToProps)(userSignUp);