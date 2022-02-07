import React from "react";
import  {CgClose, CgInfo}  from 'react-icons/cg'
import { useHistory} from "react-router"; 

import './Task.css'



const Task = ({ task, HandleUpdateDoneArrayItem, HandleDeleteItem }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    const HandleClickOnTask = () => {
        HandleUpdateDoneArrayItem(task.id)
    }

    return (
        <div className="task-container" style={task.complete ? {borderLeft: '6px solid chartreuse'}: {}}>
            <div className="task-title" onClick={HandleClickOnTask}>{task.title}</div>
            <div className="buttons-container">
                <button className='x-button' onClick={() => HandleDeleteItem(task.id)}><CgClose/></button>
                <button className='see-task-details-button' onClick={handleTaskDetailsClick}><CgInfo/></button>

            </div>
        </div>
    )
}

export default Task