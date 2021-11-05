import axios from "axios";

const url = "https://todo-backend2.herokuapp.com/tasks";

// CREATE
export function createTask(newTask) {
  console.log(`api data: ${newTask}`);
  return axios.post(url, newTask);
}

// READ ALL TASKS
export const getTasks = () => {
  return axios.get(`${url}`);
};

// READ INDIVIDUAL TASK
export const getTask = (id) => {
  return axios.get(`${url}/${id}`);
};

// UPDATE
export const updateTask = (id, updatedTask) => {
  return axios.patch(`${url}/${id}`, updatedTask);
};

// DELETE
export const deleteTask = (id) => {
  return axios.delete(`${url}/${id}`);
};
