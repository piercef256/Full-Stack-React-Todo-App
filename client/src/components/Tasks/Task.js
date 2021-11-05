import React, { useState } from "react";
import { useEffect } from "react";
import * as api from "../../api/index.js";

const Task = ({ id = "", deleteTask, updateTask, index }) => {
  const [editing, setEditing] = useState(false);
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState({
    title: "",
  });

  const getTask = async (id) => {
    const response = await api.getTask(id);
    setTask(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, { ...task, title: taskText });
    await getTask(id);
    setEditing(false);
  };

  useEffect(() => {
    getTask(id);
  }, [id]);

  return (
    <>
      {editing ? (
        <>
          <div className="d-flex w-100 justify-content-between">
            <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
              <input
                className="form-control"
                type="text"
                value={taskText}
                name="text"
                onChange={(e) => {
                  setTaskText(e.target.value);
                }}
              />
              <button type="submit" className="btn btn-primary">
                Confirm
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setEditing(!editing)}
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex w-100 justify-content-between">
            <div
              className="d-flex w-100"
              onClick={() => {
                setEditing(!editing);
                setTaskText(task.title);
              }}
            >
              <h5 className="mb-1">{index + 1}</h5>
              <div className="ms-1">{task.title}</div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-danger ms-1"
                onClick={() => deleteTask(id)}
              >
                X
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Task;
