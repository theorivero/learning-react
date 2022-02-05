import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Tasks from "./components/Tasks";
import './App.css'
import AddTask from "./components/AddTask";

const App = () => {
  // let message = "Hello world";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      complete: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      complete: true,
    }
  ])

  const HandleSetAddition = (taskTitle) => {
    const newTasks = [ ... tasks, {
      title: taskTitle,
      id: uuidv4(),
      complete: false
    }];
    setTasks(newTasks);
    console.log(tasks)
  }


  const HandleUpdateDoneArrayItem = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ... task, complete: !task.complete} 
      return task
    });
    setTasks(newTasks);
  }

  const HandleDeleteItem = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
  <div>
    <div className="container">
      <AddTask HandleSetAddition={HandleSetAddition}/>
      <Tasks tasks={tasks} HandleUpdateDoneArrayItem={HandleUpdateDoneArrayItem} HandleDeleteItem={HandleDeleteItem}/>
    </div>
  </div>  
  );
};

export default App;
