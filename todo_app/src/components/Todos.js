const Todos = ({ items, handleDelete, handleComplete }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="items-list"
          key={item.id}
          title="Double click to mark complete"
          onDoubleClick={() => handleComplete(item.id)}
        >
          <div className={item.completed && "item-line-through"}>
            {item.text}
          </div>
          <div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
