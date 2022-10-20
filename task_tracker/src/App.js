import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      time: "10:40 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Read Book",
      time: "6:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Have Lunch",
      time: "1:15 PM",
      reminder: true,
    },
  ]);

  const handleClick = (e) => {
    console.log("Click", e);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Button
        text="Add"
        classes="btn btn-primary btn-sm"
        onClick={handleClick}
      />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={handleDelete} />
      ) : (
        <h5>No tasks found!</h5>
      )}
    </div>
  );
}

export default App;
