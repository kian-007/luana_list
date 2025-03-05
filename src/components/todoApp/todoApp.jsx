import React, { useState, useEffect } from 'react';
import './todoApp.css'
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../';
import { v4 as uuid } from 'uuid';
import { RestFulApi } from '../../apis/api';
import { MdArrowBackIos } from "react-icons/md";


const TodoApp = ({ section, updateSection }) => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const [refresh, setRefresh] = useState(0)


    useEffect(() => {
        console.log("Current Section is : ", section);
    })


    let taskLength = tasks.length
    let last = tasks[taskLength - 1]

    useEffect(() => {


        let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=get_all_list`)
        res.then(function (value) {
            value.map(function (value) {
                value.status = value.status - 0
                console.log(typeof value.status)
            })
            setTasks(value)
            if (!value || value == '') {
                setTasks([
                    {
                        id: uuid(),
                        title: "Build Your First Task Partner (^_^)",
                        amount: "blah blah blah kiloo",
                        section: "kitchen",
                        status: 0
                    }
                ])
            }
            console.log("tasks: ", tasks)
        });
        res.catch(function (err) {
            console.log("reason", err)
        })
        // }
    }, [])

    useEffect(() => {
        let newFilteredTasks;
        let finalFilteredTasks
        if (filter === 'completed') {
            newFilteredTasks = tasks.filter(task => task.status)
        } else if (filter === 'active') {
            newFilteredTasks = tasks.filter(task => !task.status)
        } else if (filter === 'all') {
            newFilteredTasks = tasks;
        }
        // setFilteredTasks(newFilteredTasks);
        if (section === 'all') {
            setFilteredTasks(newFilteredTasks);
        } else {
            finalFilteredTasks = newFilteredTasks.filter(task => task.section == section)
            setFilteredTasks(finalFilteredTasks);
        }

    }, [filter, tasks, refresh, section])



    const addTask = (taskTitle, taskAmount) => {
        const newTasks = [
            ...tasks,
            {
                id: uuid(),
                title: taskTitle,
                amount: taskAmount,
                section: section === 'all' ? section = 'kitchen' : section,
                status: 0
            },
        ]
        console.log("lastTask: ", newTasks[newTasks.length - 1])
        let lastTask = newTasks[newTasks.length - 1]
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))

        const myJSON = JSON.stringify(lastTask);
        let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=add_list&arg1=${myJSON}`)
        res.then(function (value) {
            console.log("response value: ", value)
        });
        res.catch(function (err) {
            console.log("response err reason: ", err)
        })

    }


    const deleteTask = (taskId) => {

        const newTask = tasks.filter(task => task.id !== taskId); /* AI solution */

        setTasks(newTask)
        localStorage.setItem('tasks', JSON.stringify(newTask))

        let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=delete_list&arg1=${taskId}`)
        res.then(function (value) {
            console.log("response value: ", value)
        });
        res.catch(function (err) {
            console.log("response err reason: ", err)
        })

    }

    const handleChangeStatus = (taskId) => {


        setRefresh(refresh + 1)


        /* AI solution */
        const newTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: !task.status } : task
        );
        setTasks(newTasks);
        setRefresh(refresh + 1);

        const updatedTask = newTasks.find(task => task.id === taskId)
        const statusToSend = updatedTask.status ? 1 : 0;
        const data = {
            id: taskId,
            status: statusToSend
        };
        const myJSON = JSON.stringify(data);
        RestFulApi(`https://kikiq.ir/apis/api2.php?fn=update_list&arg1=${myJSON}`)
            .then(value => console.log("list updated", value))
            .catch(err => console.log("list didnt update", err));



    }

    return (
        <div className="todoApp">

            <div>
                <button id='menuButton'  >
                    <p><MdArrowBackIos /></p>
                </button>
            </div>

            <AddTaskForm addTask={addTask} />
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus} />
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
        </div>
    );
}

export default TodoApp;