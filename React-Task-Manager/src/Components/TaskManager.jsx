import React from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import { useState } from 'react'

function TaskManager() {
    let [Task,setTask]=useState([])
    const addTask=(prop)=>{
        const newtask={
            id:Date.now(),
            title:prop.task,
            priority:prop.priority,
            completed:false
        }
        setTask(prev=>[...prev,newtask])
    }
    const deleteTask=(prop)=>{
        setTask(prev=>prev.filter(obj=>obj.id!=prop.id))
    }
    const toggle=(prop)=>{
        setTask(prev=>prev.map(obj=>obj.id==prop.id?{...obj,completed: !obj.completed}:obj))
    }
    const totalTasks = Task.length
    const completedTasks = Task.filter(task => task.completed).length
  return (
    <div>
        <h2 className="text-center text-2xl font-bold mt-4">
            Total Tasks: {totalTasks} | Completed: {completedTasks}
        </h2>
        <AddTaskForm addTask={addTask} />
        <TaskList tasks={Task} deleteTask={deleteTask} toggle={toggle}/>
        
    </div>
  )
}
export default TaskManager