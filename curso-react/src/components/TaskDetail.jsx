import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

import "./TaskDetail.css"

import Button from './Button';

const TaskDetail = () => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push('')
    }
    const params = useParams();
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleTaskDetailsClick}>Voltar</Button>
            </div>
            <div className="task-detail-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia beatae ducimus nihil accusantium voluptates! Delectus?</p>
            </div>
        </>
     );
}
 
export default TaskDetail;