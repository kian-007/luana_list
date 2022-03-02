import React, {useState} from 'react';
import './addTaskForm.css';

const AddTaskForm = ({addTask}) => {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        if(event) event.preventDefault()
        setValue(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!value || value === ''){
            return
        } 
        addTask(value)
        setValue('')
    }

    return (
        <div className="addTaskForm">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={value} type="text" placeholder="what needs to be done..."></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;