import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

function ToDo({ toDo, markDone, deleteTask, updateTask }) {
  return (
    <>
      {toDo &&
        toDo.map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? "done" : ""}>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className="buttonsWrap">
                  <span>
                    <button
                      className="completeBtn hoverCompleteBtn"
                      onClick={(e) => markDone(task.id)}
                    >
                      Complete
                    </button>
                  </span>
                  {task.status ? null : (
                    <span onClick={() => updateTask()}>
                      <FontAwesomeIcon className="penIcon" icon={faPen} />
                    </span>
                  )}
                  <span onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon
                      className="trashCanIcon"
                      icon={faTrashCan}
                    />
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
}

export default ToDo;
