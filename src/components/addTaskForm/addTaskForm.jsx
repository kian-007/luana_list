import React from 'react';
import './addTaskForm.css';

const AddTaskForm = () => {
    return (
        <div className="addTaskForm">
            <form>
                <input type="text" placeholder="what needs to be done..."></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;