import './SignUpForm.css'
import React, { FormEvent, useState } from 'react';
import {userLogin} from "../../utils/systemFunction";
import { useDispatch } from "react-redux";


export const SignInForm = ({setShowModal}: any) : JSX.Element => {

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
        dispatch(userLogin(creds)); 
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
                <div id="toggleToSignUp">No account yet? <span>Sign Up</span></div>
                <div id="close-modal" onClick={closeModal}>close</div>
            </form>
        </div>
    )
}

export default SignInForm;
