import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

function ToDo({ toDo, markDone, deleteTask, setUpdateData }) {
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
                  {/* on Complete button click */}
                  <span>
                    <button
                      className="completeBtn hoverCompleteBtn"
                      onClick={(e) => markDone(task.id)}
                    >
                      Complete
                    </button>
                  </span>
                  {/* if task status is incompleted, there will be edit option */}
                  {task.status ? null : (
                    <span
                      onClick={() =>
                        setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon className="penIcon" icon={faPen} />
                    </span>
                  )}
                  {/* delete task */}
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
