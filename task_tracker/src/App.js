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

  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Button
        text="Add"
        classes="btn btn-primary btn-sm"
        onClick={handleClick}
      />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
