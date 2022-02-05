import React, { useState } from "react";

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
      id: Math.random(10),
      complete: false
    }];

    setTasks(newTasks);
    console.log(tasks)
  }

  return (
  <div>
    <div className="container">
      <AddTask HandleSetAddition={HandleSetAddition}/>
      <Tasks tasks={tasks}/>
    </div>
  </div>  
  );
};

export default App;
