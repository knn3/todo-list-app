import React from "react";

function AddTaskForm({ newTask, setNewTask, addTask }) {
  // Enter key submit item
  const onEnterKey = (e) => {
    if (e.charCode === 13) {
      setNewTask(e.target.value);
      addTask();
    }
  };
  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={newTask}
          onKeyPress={onEnterKey}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <br></br>
    </div>
  );
}

export default AddTaskForm;
