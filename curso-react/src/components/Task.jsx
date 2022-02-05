import React from "react";
import './Task.css'
import Button from "./Button";
const Task = ({ task, HandleUpdateDoneArrayItem, HandleDeleteItem }) => {
    const HandleClickOnTask = () => {
        HandleUpdateDoneArrayItem(task.id)
    }

    const HandleClickOnDelete = () => {
        HandleDeleteItem(task.id)
    }

    return (
        <div className="task-container" style={task.complete ? {borderLeft: '6px solid chartreuse'}: {}}>
            <div className="task-title" onClick={HandleClickOnTask}>{task.title}</div>
            <div className="buttons-container">
                <button className='x-button' onClick={HandleClickOnDelete}>x</button>
            </div>
        </div>
    )
}

export default Task