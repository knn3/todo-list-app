import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {

  //Tasks state
  const [toDo, setToDo] = useState([]);

  //Temp State 
  const [newTask, setNewTask] = useState('');

  //Count State
  const [count, setCount] = useState(0);

  //add task 
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setCount(count + 1);
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  //delete task
  const deleteTask = (id) => {
    toDo.map(task => {
      if (task.id === id) {
        task.status ? setCount(count) : setCount(count - 1);
      }
    })
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);  
  }

  //mark task is completed
  const markDone = (id) => {
    let newTasks = toDo.map(task => {
      if (task.id === id) {
        task.status ? setCount(count + 1) : setCount(count - 1);
        return ({...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTasks);
  }

  // Enter key submit item
  const onEnterKey = (e) => {
    if (e.charCode === 13) {
      setNewTask(e.target.value);
      addTask();
    }
  }

  return (
    <div className='container App'>
      <br></br>
      <h2>Pending Tasks &#40;{count}&#41;</h2>
      <br></br>

      {/* Add Task */}
      <div className='row'>
        <div className='col'>
          <input
            type='text'
            className='form-control'
            placeholder='Add a new task'
            value={newTask}
            onKeyPress={onEnterKey}
            onChange={e => setNewTask(e.target.value)}
          />
        </div>
        <br></br>
      </div>

      {/* Displaying the tasks */}
      {toDo && toDo.length ? '' : 'No task'}
      {toDo && toDo
        .map((task, index) => {
          return(
            <React.Fragment key = {task.id}>
              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>
                  <span className='taskText'>{task.title}</span>
                </div>
                <div className='buttonsWrap'>
                  <span>
                    <button
                      className='completeBtn'
                      onClick={(e) => markDone(task.id)}
                    >Complete</button>
                  </span>
                  <span>
                    <button
                      className='deleteBtn'
                      onClick={() => deleteTask(task.id)}
                    > x
                    </button>
                  </span>

                </div>
              </div>
              
          
            </React.Fragment>
          )
        })
      }
    </div>
  );
}

export default App;
