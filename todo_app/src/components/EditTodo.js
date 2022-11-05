import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const EditTodo = ({ item, handleClose, handleEditItem, show }) => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState("");

  //using use effect to set the item, because if I do it directly in the useState, it didn't set properly as it sets only the first time, so we need to set the item every time when the props.item changes.
  useEffect(() => {
    setText(item.text);
    setCompleted(item.completed);
  }, [item]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: item.id,
      text: text,
      completed: completed,
    };
    handleEditItem(newItem);

    setText("");
    setCompleted("");
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit ToDo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={text}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-check-label">Completed</label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={completed}
                value={completed}
                onChange={(e) => setCompleted(e.currentTarget.checked)}
              />
            </div>
            <div>
              <button className="btn btn-warning w-100 mt-3 mb-2">Save</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTodo;
