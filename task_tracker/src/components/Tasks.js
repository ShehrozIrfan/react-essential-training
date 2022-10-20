import { useState } from "react";

const Tasks = () => {
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
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
};

export default Tasks;
