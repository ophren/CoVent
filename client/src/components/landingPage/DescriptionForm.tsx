import './DescriptionForm.css'
import React from "react";
import { RootState } from '../../types/combinedStoreTypes'
import { FormEvent, useState } from 'react'
import { setUserDescription} from "../../redux/userState/userActions";
import { useDispatch } from "react-redux";

export const DescriptionForm = ({setShowDescriptionModal}: any) : JSX.Element => {

    const dispatch = useDispatch();
    
    const [newUserDescription, setNewUserDescription] = useState<object>({firstName: '', age: 0, location:''})
    // import user with useselector
    function handleChange (ev : React.ChangeEvent<HTMLInputElement>) {
        let {name, value} = ev.target;

        if (name === "age") {
            const valueToInt = parseInt(value);
            setNewUserDescription(prevState => ({...prevState, [name]: valueToInt}));
        }
        else {
            setNewUserDescription(prevState => ({...prevState, [name]: value}));
        }
    }

    function handleDescription () {
        console.log(newUserDescription);
        dispatch(setUserDescription(newUserDescription)); 
    }

    return (
        <div id="modal-main">
            <div>Please complete your profile information:</div>

            <form id="modal" onSubmit={handleDescription}>

            <input 
                name="firstName"
                id="" 
                placeholder="First Name"
                onChange={handleChange}
            >                
            </input>

            <input 
                name="age"
                id="" 
                placeholder="Age"
                onChange={handleChange}
            >                
            </input>

            <input 
                name="location"
                id="" 
                placeholder="Location" 
                onChange={handleChange}
            >
            </input>

          

            <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default DescriptionForm;