// A functional component that displays a single bookmark
const Bookmark = ({ name, url, id, onEdit, onDelete }) => {
  // Returns a div that contains the bookmark name as a link,
  // and two buttons to allow editing and deleting of the bookmark
  return (
    <div className="bookmark-item">
      <div className="bookmark-center-left">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
        <div className="bookmark-btns">
          <button className="list-btn" onClick={() => onDelete(id)}>
            Delete
          </button>
          {/* now on click, run the passed function with the bookmark id */}
          <button className="list-btn" onClick={() => onEdit(id)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

// Exports the Bookmark component to be used in List.jsx
export default Bookmark;
