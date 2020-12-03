import './DescriptionForm.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/combinedStoreTypes'
import { FormEvent, useState } from 'react'
import { setUserAge} from "../../redux/userState/userActions";
import { useDispatch } from "react-redux";

export const DescriptionForm = ({setShowDescriptionModal}: any) : JSX.Element => {

    const dispatch = useDispatch();
    const [newAge, setNewAge] = useState(0);
    // const userAge = useSelector((state: RootState) => state.user.age) only for importing, for use, but not change?
    
    function handleChange (ev : React.ChangeEvent<HTMLInputElement>) {
        setNewAge(parseInt(ev.target.value));
    }
    
    function handleAge () {
        dispatch(setUserAge(newAge)); 
    }

    return (
        <div id="modal-main">
            <div>Please complete your profile information:</div>
            <form id="modal" onSubmit={handleAge}>
            <input 
                id="" 
                placeholder="Age" 
                onChange={handleChange}
            >
            </input>
            <button>Submit age</button>
            </form>
        </div>
    );
}

export default DescriptionForm;