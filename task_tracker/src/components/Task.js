import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, toggleReminder }) => {
  return (
    //TODO: Need to add the styles, when the reminder is true
    <div
      onDoubleClick={() => toggleReminder(task.id)}
      style={{ cursor: "pointer" }}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;
