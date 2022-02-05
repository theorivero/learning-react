import React from "react";
import './Task.css'

const Task = ({ task }) => {
    return (
        <div className="task-container">
            Nome: {task.title}
        </div>
    )
}

export default Task