import Task from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          toggleReminder={toggleReminder}
        />
      ))}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  toggleReminder: PropTypes.func,
};

export default Tasks;
