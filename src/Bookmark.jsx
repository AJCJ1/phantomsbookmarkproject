// A functional component that displays a single bookmark
const Bookmark = () => {
  // Returns a div that contains the bookmark name as a link,
  // and two buttons to allow editing and deleting of the bookmark
  return (
    <div className="bookmark-item">
      <div className="bookmark-center-left">
        <a href="" target="_blank" rel="noreferrer">
          TEST
        </a>
        <div className="bookmark-btns">
          <button className="list-btn">
            Delete
          </button>
          <button className="list-btn">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

// Exports the Bookmark component to be used in List.jsx
export default Bookmark;
