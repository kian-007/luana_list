import React from 'react';
import './taskItem.css';
import { FaTrash } from "react-icons/fa";

const TaskItem = ({task, deleteTask, handleChangeStatus}) => {

    return (
        <li className={`taskItem ${task.status?"active":""}`}>
            <input onChange={()=>{handleChangeStatus(task.id)}} type="checkbox" checked={task.status}></input>
            <h2>{task.title}</h2>
            <h2 style={{width: '40%', color: 'purple', borderLeft: '1px solid brown', textAlign: 'center'}}>{task.amount}</h2>
            <button onClick={()=>{deleteTask(task.id)}}><FaTrash /></button>
        </li>
    );
}

export default TaskItem;