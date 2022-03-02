import React from 'react';
import './taskList.css'
import { TaskItem } from '../';

const TaskList = () => {
    return (
        <div className="taskList">
            <ul>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </ul>
        </div>
    );
}

export default TaskList;