import React from 'react';
import './taskItem.css';
import { FaTrash } from "react-icons/fa";

const TaskItem = () => {
    return (
        <li className="taskItem">
            <input type="checkbox"></input>
            <h2>Build This App</h2>
            <button><FaTrash /></button>
        </li>
    );
}

export default TaskItem;