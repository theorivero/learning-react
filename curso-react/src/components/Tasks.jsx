import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, HandleUpdateDoneArrayItem, HandleDeleteItem }) => {
    return (
        <>
            {tasks.map( task => <Task task={task} HandleUpdateDoneArrayItem={HandleUpdateDoneArrayItem} HandleDeleteItem={HandleDeleteItem}/>)}
        </>
    )
}

export default Tasks