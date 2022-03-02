import React from 'react';
import './todoApp.css'
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../';

const TodoApp = () => {
    return (
        <div className="todoApp">
            <AddTaskForm />
            <TaskList />
            <FilterFooter />
        </div>
    );
}

export default TodoApp;