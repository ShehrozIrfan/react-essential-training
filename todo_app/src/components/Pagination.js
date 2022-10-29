const Pagination = ({ todosPerPage, totalTodos, handlePaginate, isActive }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="center-pagination mt-4">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <span
                className={`page-link text-black ${
                  isActive === number && "bg-primary text-white"
                }`}
                onClick={() => handlePaginate(number)}
              >
                {number}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
