const Todos = ({ items, handleDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="items-list" key={item.id}>
          <div>{item.text}</div>
          <div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
