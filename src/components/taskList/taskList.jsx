import React from 'react';

const TaskList = () => {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox"></input>
                    <h2>Build This App</h2>
                    <button>Del</button>
                </li>
            </ul>
        </div>
    );
}

export default TaskList;