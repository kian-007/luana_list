import React, { useState, useEffect } from 'react';
import './todoApp.css'
import {
    AddTaskForm,
    TaskList,
    FilterFooter,
} from '../';
import { v4 as uuid } from 'uuid';
import { RestFulApi } from '../../apis/api';


const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setFilteredTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const [refresh, setRefresh] = useState(0)
    

    // useEffect(() => {
    //     let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=hey&arg1=kikian`)
    //         res.then(function (value) {
    //             console.log("response value: ", value)
    //         });
    //         res.catch(function (err) {
    //             console.log("response err reason: ", err)
    //         })
    // },[])


    let taskLength = tasks.length
            let last = tasks[taskLength - 1]
            // console.log("last: ", last)

    useEffect(() => {

        // let storedTasks = localStorage.getItem('tasks')
        // if (storedTasks) {
        //     storedTasks = JSON.parse(storedTasks)
        //     setTasks(storedTasks)
        // } else {
            let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=get_all_list`)
            res.then(function (value) {
                value.map(function (value) {
                    value.status  =  value.status - 0
                    console.log(typeof value.status)
                })
                setTasks(value)
                if(!value || value == '') {
                    setTasks([
                        {
                            id: uuid(),
                            title: "Build Your First Task Partner (^_^)",
                            amount: "blah blah blah kiloo",
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

    const addTask = (taskTitle, taskAmount) => {
        const newTasks = [
            ...tasks,
            {
                id: uuid(),
                title: taskTitle,
                amount: taskAmount,
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
        let newTask = tasks
        delete newTask[tasks.findIndex(task => task.id === taskId)]
        newTask = newTask.filter((item) => item);
        setTasks(newTask)
        localStorage.setItem('tasks', JSON.stringify(newTask))

        // let newTask = tasks
        // newTask.splice(tasks.findIndex(task=> task.id === taskId),0)
        // console.log("tasks", newTask)


        let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=delete_list&arg1=${taskId}`)
            res.then(function (value) {
                console.log("response value: ", value)
            });
            res.catch(function (err) {
                console.log("response err reason: ", err)
            })

    }

    // console.log("show me tasks: ", tasks)
    const handleChangeStatus = (taskId) => {
        let newTask = tasks
        const taskIndex = tasks.findIndex(task => task.id === taskId)
        console.log("newTask[taskIndex].status:  ", !newTask[taskIndex].status)
        newTask[taskIndex].status = !newTask[taskIndex].status
        newTask[taskIndex].status = Number(newTask[taskIndex].status)
        setTasks(newTask)
        // console.log("type: ", typeof(newTask[taskIndex].status));
        

        //-----------------------in mohem tarin bakhsh az in code (deqat shavad)(khodamm nafahmidm chera)------
            if(newTask[taskIndex].status == 1 || newTask[taskIndex].status == 'true'){
                newTask[taskIndex].status = String(newTask[taskIndex].status)
            } 

        //-----------------------
        
        // localStorage.setItem('tasks', JSON.stringify(newTask))
        setRefresh(refresh + 1)

        
                let res = RestFulApi(`https://kikiq.ir/apis/api2.php?fn=update_list&arg1=${taskId}&arg2=${newTask[taskIndex].status}`)
                res.then(function (value) {
                    console.log("list updated: ", value)
                });
                res.catch(function (err) {
                    console.log("list didnt update: ", err)
                })

        
    }

    return (
        <div className="todoApp">
            <AddTaskForm addTask={addTask}  />
            <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus} />
            <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
        </div>
    );
}

export default TodoApp;