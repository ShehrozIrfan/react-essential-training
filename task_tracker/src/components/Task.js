const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.text}</h3>
      <p>{task.time}</p>
    </div>
  );
};

export default Task;
