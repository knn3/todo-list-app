import React, { useState } from "react";

import AddTaskForm from "./components/AddTaskForm.jsx";
import ToDo from "./components/ToDo.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  //Tasks state
  const [toDo, setToDo] = useState([]);

  //Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //pending State
  const [pending, setPending] = useState(0);

  //add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setPending(pending + 1);
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //delete task
  const deleteTask = (id) => {
    // if task completed, do not change pending, else set pending - 1
    toDo.map((task) => {
      if (task.id === id) {
        task.status ? setPending(pending) : setPending(pending - 1);
      }
      return task;
    });
    // delete the task with id
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //mark task is completed
  const markDone = (id) => {
    let newTasks = toDo.map((task) => {
      if (task.id === id) {
        //check if status completed or not, set pending accordingly
        task.status ? setPending(pending + 1) : setPending(pending - 1);

        // change status of the task
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTasks);
  };

  //cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  }

  //change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData("");
  }

  const onEnterChange = (e) => {
    if (e.charCode === 13) {
      updateTask();
    }
  };

  return (
    <div className="container App">
      <br></br>
      <h2>Pending Tasks &#40;{pending}&#41;</h2>
      <br></br>

      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onKeyPress={(e) =>onEnterChange(e)}
            onChange={(e) => changeTask(e)}
            placeholder="Update task..."
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <button onClick={cancelUpdate} className="btn btn-lg btn-danger">
            Cancel
          </button>
        </div>
      </div>
      <br></br>

      {/* Add Task */}
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />

      {/* Displaying the tasks */}
      {toDo && toDo.length ? "" : "No task"}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        deleteTask={deleteTask}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
