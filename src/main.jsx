import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './style.css'
import App from './App.jsx'
import Todolist from './component/Todolist.jsx'
import Foot from './component/Foot.jsx'
import Addtask from './component/Addtast.jsx';
import initialData from './initialData.jsx';
import uniqueId from 'uniqueid';
// import { useState } from 'react';
// import { preview } from 'vite';


class ToApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: initialData
    } 
  }

  onToggleCompleted = (taskId) => {
    console.log("Toggling task:", taskId);
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  };
  
  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqueId(),
      name: newTaskName,
      completed: false
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }))

  };
  
  
  
  onDeleteCompleted = () => {
    this.setState(prevState => {
      let newState = prevState.tasks.filter(task => !task.completed)
      return {
        tasks: newState
      }
    });
  }

  

  render(){
    return(
      <section id="todo">
        
      <BrowserRouter>
        
        <div className="p-6">
          <Routes>
            {/* Route pour ajouter une tâche */}
            <Route path="/add-task" element={<Addtask onAddTask={this.onAddTask} />} />
             {/* Route pour toutes les tâches ou filtrées */}
             <Route path="/:filter?" element={<Todolist tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}  />} />
          </Routes>
          
        </div>
        <Foot onDeleteCompleted={this.onDeleteCompleted} />
      </BrowserRouter>
      
    </section>
    )
    
  }

}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToApp />
    <App />
    
  </StrictMode>,
)
