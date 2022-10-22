const Todos = ({ items, handleDelete, handleComplete, handleEdit }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="d-flex items-list"
          key={item.id}
          title="Double click to mark complete"
        >
          <div
            className={item.completed ? "item-line-through" : ""}
            onDoubleClick={() => handleComplete(item.id)}
          >
            {item.text}
          </div>
          <div className="d-flex">
            <div>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
            <div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
