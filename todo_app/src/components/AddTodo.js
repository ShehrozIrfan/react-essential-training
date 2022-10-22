import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Adding some validation
    if (text.trim() === "") {
      alert("Please enter text!");
      return;
    }

    addTodo(text);

    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Task to be done..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-add-todo w-100 mt-2 mb-2">
            Add ToDo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
