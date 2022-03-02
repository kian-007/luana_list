import React, { useState, useEffect } from 'react';
import './todoApp.css'
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../';
import { v4 as uuid } from 'uuid';


const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let storedTasks = localStorage.getItem('tasks')
        if (storedTasks) {
            storedTasks = JSON.parse(storedTasks)
            setTasks(storedTasks)
        } else {
            setTasks([
                {
                    id: uuid(),
                    title: "Build Your First Task (^_^)",
                    status: false
                }
            ])
        }
    }, [])

    useEffect(() => {
        if (filter === 'all') {
            setFilteredTasks(tasks)
        }
        if (filter === 'completed') {
            const newCompletedFilteredTasks = tasks.filter(task => task.status)
            setFilteredTasks(newCompletedFilteredTasks)
        }
        if (filter === 'active') {
            const newActiveFilteredTasks = tasks.filter(task => !task.status)
            setFilteredTasks(newActiveFilteredTasks)
        }
    }, [filter, tasks, refresh])

    const addTask = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                id: uuid(),
                title: taskTitle,
                status: false
            },
        ]
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    const deleteTask = (taskId) => {
        let newTasksList = tasks
        delete newTasksList[tasks.findIndex(task => task.id === taskId)]
        newTasksList = newTasksList.filter((item) => item);
        setTasks(newTasksList)
        localStorage.setItem('tasks', JSON.stringify(newTasksList))

        // let newTasksList = tasks
        // newTasksList.splice(tasks.findIndex(task=> task.id === taskId),0)
        // console.log("tasks", newTasksList)
    }

    const handleChangeStatus = (taskId) => {
        let newTasksList = tasks
        const taskIndex = tasks.findIndex(task => task.id === taskId)
        newTasksList[taskIndex].status = !newTasksList[taskIndex].status
        setTasks(newTasksList)
        localStorage.setItem('tasks', JSON.stringify(newTasksList))
        setRefresh(refresh + 1)
    }

    return (
        <div className="todoApp">
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus} />
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
        </div>
    );
}

export default TodoApp;