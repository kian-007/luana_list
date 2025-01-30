import React, {useEffect,useState, useRef} from 'react';
import './addTaskForm.css';
import { RestFulApi } from '../../apis/api';

const AddTaskForm = ({addTask}) => {

    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const inputElement = useRef(null)


    useEffect(() => {
        inputElement.current.focus();

    }, [])


    const handleChange = (event) => {
        if(event) event.preventDefault()
        setValue(event.target.value)

    }

    const handleChange2 = (event) => {
        if(event) event.preventDefault()
        setValue2(event.target.value)

    }


    
    


    const handleSubmit = (event) => {
        event.preventDefault()
        if(!value || value === ''){
            return
        } 
        addTask(value, value2)

        setValue('')
        setValue2('')
        inputElement.current.focus();
    }

    return (
        <div className="addTaskForm">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={value} type="text" placeholder="what needs to be bought..."  ref={inputElement}></input>
                <input onChange={handleChange2} value={value2} type="text" placeholder="set amount" style={{width:"40%"}} ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;