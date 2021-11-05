import React from "react";
import { useEffect, useState } from "react";
import * as api from "../../api";
import "../../style.css";
import Task from "./Task";

const Tasks = () => {
  const [taskText, setTaskText] = useState("");
  const [tasksData, setTasksData] = useState([{ title: "" }]);

  const createTask = async () => {
    await api.createTask({ title: taskText });
    getTasks();
  };

  const getTasks = async () => {
    const response = await api.getTasks();
    setTasksData(response.data);
  };

  const updateTask = async (id, newTask) => {
    await api.updateTask(id, newTask);
    getTasks();
  };

  const deleteTask = async (id) => {
    await api.deleteTask(id);
    getTasks();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
    setTaskText("");
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h1 className="text-center my-3">To Do App</h1>
      <h3 className="text-center">Click on task to edit</h3>
      <div className="todo container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          autoComplete="off"
        >
          <div className="form-group task-form">
            <input
              className="form-control"
              type="text"
              value={taskText}
              name="text"
              onChange={(e) => {
                setTaskText(e.target.value);
              }}
              placeholder="Title"
            />

            <button className="btn btn-primary" type="submit">
              <span>+</span>
            </button>
          </div>
        </form>
        {/* <button
          onClick={(e) => {
            refresh(e);
          }}
        >
          Refresh
        </button> */}
        <hr />
        <ul className="todo-list list-group">
          {tasksData.map((task, key) => (
            <li className="todo-list-item list-group-item" key={key}>
              <Task
                id={task._id}
                deleteTask={deleteTask}
                updateTask={updateTask}
                index={key}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
