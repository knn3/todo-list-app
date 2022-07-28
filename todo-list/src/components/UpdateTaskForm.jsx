import React from "react";

const UpdateTaskForm = ({changeTask, cancelUpdate, updateTask, updateData}) => {
  const onEnterChange = (e) => {
    if (e.charCode === 13) {
      updateTask();
    }
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onKeyPress={(e) => onEnterChange(e)}
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
    </>
  );
};

export default UpdateTaskForm;
