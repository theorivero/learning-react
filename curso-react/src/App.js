import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

import './App.css'

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
    <Router>
      <div>
        <div className="container">
          <Header>Minhas Tarefas</Header>
          <Route path='/' exact render={() => (
            <>
              <AddTask HandleSetAddition={HandleSetAddition}/>
              <Tasks tasks={tasks} HandleUpdateDoneArrayItem={HandleUpdateDoneArrayItem} HandleDeleteItem={HandleDeleteItem}/>
            </>
          )}
        />
        </div>
      </div>  
    </Router>
  );
};

export default App;
