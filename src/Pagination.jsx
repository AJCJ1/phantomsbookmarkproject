const Pagination = ({ bookmarks, currentPage, setCurrentPage }) => {

  // define number of items to be shown per page, and create an array to store page numbers
  const itemsPerPage = 20;
  const pageNumbers = [];
  // Loop through the number of pages needed based on the number of bookmarks and items per page
  for (let i = 1; i <= Math.ceil(bookmarks.length / itemsPerPage); i++) {
    // Add the page number to the pageNumbers array
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-main">
      <button
        className="pagination-btn"
      >
        {"<"}
      </button>
      {/* Render buttons for each page number */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          // Call the setCurrentPage function with the current page number when clicked
          onClick={() => setCurrentPage(number)}
          // Apply a class to indicate if the button is for the active page
          className={
            currentPage === number ? "page-active page-number" : "page-number"
          }
        >
          {number}
        </button>
      ))}
      <button
        className="pagination-btn"
        // Call the setCurrentPage function with the next page number when clicked
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
