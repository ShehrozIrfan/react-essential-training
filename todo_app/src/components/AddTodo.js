import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Adding some validation
    if (text.trim() === "") {
      setError("Todo text can't be blank!");
      return;
    } else if (text.trim().length > 255) {
      setError("Todo text can't be longer than 255 characters!");
      return;
    } else {
      setError("");
      addTodo(text);

      setText("");
    }
  };

  return (
    <div className="mt-3 mb-3">
      <div class={error ? "alert alert-danger" : ""}>{error}</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Task to be done..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            cols={5}
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
