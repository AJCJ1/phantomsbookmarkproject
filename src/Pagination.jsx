const Pagination = ({ bookmarks, currentPage, setCurrentPage }) => {
    

  return (
    <div className="pagination-main">
      <button
        className="pagination-btn"
      >
        {"<"}
      </button>
      <button
        className="pagination-btn"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
