import './SignUpForm.css'
import React, { FormEvent, useEffect, useState } from 'react';
import { userSignUp } from "../../utils/systemFunction";
import { setUser } from "../../redux/userState/userActions"
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/userTypes"
import { RootState } from '../../types/combinedStoreTypes';



export const SignUpForm = ({ setShowModal, setShowDescriptionModal }: any): JSX.Element => {

    const dispatch = useDispatch();
    const [userCredentials, setUserCredentials] = useState<User>({ email: '', password: '', firstName: '', lastName: '' });
    const currentUser = useSelector((state: RootState) => state.user)

    // useEffect(() => { console.log('useEffect') }, [currentUser])

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target;
        setUserCredentials(prevState => ({ ...prevState, [name]: value }));
    }

    function closeModal() {
        setShowModal(false);
    } 

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // 1 - Adding user data to Firebase

        const newUser: User = { ...currentUser,
            ...userCredentials}

        // 2 - Creating new user
        dispatch(setUser(newUser));
        setShowModal(false);
        setShowDescriptionModal(true);
    }


    return (
        <div id="modal-main">

            <form id="modal" onSubmit={handleSubmit}>

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                >
                </input>

                <input
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                >
                </input>

                <input
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                >
                </input>

                <input
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                >
                </input>

                <button id="submitSignUp">Submit</button>
                <div id="toggleToSignIn">Already have an account? <span>Sign in</span></div>
                <div id="close-modal" onClick={closeModal}>close</div>
            </form>
        </div>
    )
}

export default SignUpForm;

