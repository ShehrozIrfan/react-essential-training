import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const EditTodo = ({ item, handleClose, handleEditItem, show }) => {
  const [editItem, setEditItem] = useState("");

  //using use effect to set the item, because if I do it directly in the useState, it didn't set properly as it sets only the first time, so we need to set the item every time when the props.item changes.
  useEffect(() => {
    setEditItem({
      text: item.text,
      completed: item.completed,
    });
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: item.id,
      text: editItem.text,
      completed: editItem.completed,
    };
    handleEditItem(newItem);

    setEditItem("");
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
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={editItem.text}
                className="form-control"
                onChange={(e) => setEditItem({ ...item, text: e.target.value })}
              />
            </div>
            <div>
              <label className="form-check-label">Completed</label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={editItem.completed}
                value={editItem.completed}
                onChange={(e) =>
                  setEditItem({ ...item, completed: e.currentTarget.checked })
                }
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
