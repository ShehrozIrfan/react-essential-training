const Items = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="items-list">
          <div>{item.text}</div>
          <div>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
