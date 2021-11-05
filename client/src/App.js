import React from "react";

import Tasks from "./components/Tasks/Tasks";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="tasks-container container">
      <Tasks />
    </div>
  );
}

export default App;
