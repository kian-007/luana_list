import React from 'react';
import './taskList.css'
import { TaskItem } from '../';

const TaskList = ({ tasks, deleteTask, handleChangeStatus }) => {
    return (
        <div className="taskList">
            <ul>
                {tasks.map(task => (
                    <TaskItem
                        key={`Task-${task.id}`}
                        task={task}
                        deleteTask={deleteTask}
                        handleChangeStatus={handleChangeStatus}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;