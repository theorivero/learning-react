import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetail from "./components/TaskDetail";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTasks(data);
    }
    fetchTasks();
  }, [])

  const HandleSetAddition = (taskTitle) => {
    const newTasks = [ ... tasks, {
      title: taskTitle,
      id: uuidv4(),
      complete: false
    }];
    setTasks(newTasks);
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
          )}/>
          <Route path="/:taskTitle" exact component={TaskDetail}/>
        </div>
      </div>  
    </Router>
  );
};

export default App;
