import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Adding some validation
    if (!text) {
      alert("Please enter text!");
      return;
    }

    addTask({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Day and Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Day and Time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Save Task"
            className="btn btn-warning btn-sm"
          />
        </div>
      </form>
    </>
  );
};

export default AddTask;
