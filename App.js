import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import {tareas} from './tareas.json';
import Count from './components/count';
import TaskForm from './components/TaskForm';

class App extends Component {

    constructor(){
      super();
      this.state = {
        tareas 
      }
      this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(task){
      this.setState({
        tareas: [...this.state.tareas,task]
      })
    }

    render(){
      const tareasData = this.state.tareas.map((tarea,i)=>{
        return (
          <div card className="col-md-3">
            <div className="card mt-5">
              <div className="card-header">
                <h3>{tarea.title}</h3>
                <span className="badge badge-pill badge-primary ml-2">
                  {tarea.priority}
                </span>
              </div>
              <div className="card-body">
                <p>{tarea.description}</p>
                <br></br>
                <p>
                  <b>By:</b> {tarea.responsible}
                </p>

              </div>
            </div>
          </div>
        )
      });

      

      return (
        <div className="App">
            <Navigation titulo="Mi primera aplicación"></Navigation>
            <img src={logo} className="App-logo" alt="logo" />
            <br></br>
            <span className="badge badge-pill badge-light ml-2">
              Total Tasks: {this.state.tareas.length}
            </span>
            <div className="container-fluid">
              <div className="row mt-4">
                <TaskForm handleAddTask={this.handleAddTask}></TaskForm>
              </div>
              <div className="row mt-4">
                {tareasData} 
              </div>
            </div>
        </div>
      );
    }
}
  

export default App;
