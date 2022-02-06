import React from "react";
import  {CgClose, CgInfo}  from 'react-icons/cg'
 
import './Task.css'



const Task = ({ task, HandleUpdateDoneArrayItem, HandleDeleteItem }) => {
    const HandleClickOnTask = () => {
        HandleUpdateDoneArrayItem(task.id)
    }

    return (
        <div className="task-container" style={task.complete ? {borderLeft: '6px solid chartreuse'}: {}}>
            <div className="task-title" onClick={HandleClickOnTask}>{task.title}</div>
            <div className="buttons-container">
                <button className='x-button' onClick={() => HandleDeleteItem(task.id)}><CgClose/></button>
                <button className='see-task-details-button'><CgInfo/></button>

            </div>
        </div>
    )
}

export default Task