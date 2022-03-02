import React from 'react';

const AddTaskForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="what needs to be done"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;