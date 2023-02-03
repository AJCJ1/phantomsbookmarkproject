import { useState, useEffect } from "react";
import List from "./List";
import Pagination from "./Pagination";
import validatesInput from "./ValidatesInput";
import LoadingModal from "./LoadingModal";

const Main = () => {
  // State to hold an array of all bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // State to hold the name and URL of a bookmark
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  // State to determine whether we are adding or editing a bookmark
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // State to hold the current page number for pagination default 1
  const [currentPage, setCurrentPage] = useState(1);

  // State to determine whether the loading modal is visible or not
  const [loading, setLoading] = useState(false);

  // Calculate the current bookmarks to display based on the current page number
  const itemsPerPage = 20;
  // index of last to show is page num * 20 (so 1 * 20 = 20 etc)
  const indexOfLastBookmark = currentPage * itemsPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - itemsPerPage;
  const currentBookmarks = bookmarks.slice(
    indexOfFirstBookmark,
    indexOfLastBookmark
  );

  // Use effect hook to retrieve bookmarks from local storage and set them to the state
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // function to add a bookmark to local storage
  const submitAddBookmark = () => {
    setBookmarks([...bookmarks, { name, url }]);
    localStorage.setItem(
      "bookmarks",
      JSON.stringify([...bookmarks, { name, url }])
    );
  };

  // function to handle editing a bookmark
  const handleEditBookmark = (bookmark, index) => {
    setEditing(true);
    setEditIndex(index);
    setName(bookmark.name);
    setUrl(bookmark.url);
  };

  // function to submit an edited bookmark to local storage
  const submitEditBookmark = () => {
    const newBookmarks = [...bookmarks];
    newBookmarks[editIndex] = { name, url };
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    setEditing(false);
  };

  // function to delete all bookmarks
  const handleDeleteAllBookmarks = () => {
    if (window.confirm("Are you sure you want to delete all bookmarks?")) {
      setBookmarks([]);
      localStorage.setItem("bookmarks", JSON.stringify([]));
    }
  };

  // function to delete bookmark by index
  const handleDeleteBookmark = (index) => {
    const newBookmarks = [...bookmarks];
    const bookmarkIndex = indexOfFirstBookmark + index;
    newBookmarks.splice(bookmarkIndex, 1);
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  return (
    <div>
      {/* form to submit a new bookmark */}
      <h2>Add a bookmark: </h2>
      <form
        className="form-main"
        onSubmit={async (e) => {
          // Prevents default form refresh, completes input validation before submission
          e.preventDefault();
          setLoading(true);
          const result = await validatesInput(url, name);
          if (result) {
            // checks if the user is editing or adding a new bookmark
            editing ? submitEditBookmark() : submitAddBookmark();
            setName("");
            setUrl("");
          }
          setLoading(false);
        }}
      >
        {/* input field to enter bookmark name */}
        <div className="form-container">
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            maxLength="15"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* input field to enter bookmark URL */}
          <input
            className="input-field"
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {/* submit button to add/update a bookmark */}
          <button className="submit-btn" type="submit">
            {editing ? "Update Bookmark" : "Add Bookmark"}
          </button>
        </div>
      </form>

      {/* component to handle pagination */}
      <Pagination
        bookmarks={bookmarks}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <h2>Your bookmarks: </h2>
      {/* button to delete all bookmarks */}
      <button className="delete-all-btn" onClick={handleDeleteAllBookmarks}>
        Delete All Bookmarks
      </button>
      {/* component to render the list of bookmarks */}
      <List
        currentBookmarks={currentBookmarks}
        handleEditBookmark={handleEditBookmark}
        handleDeleteBookmark={handleDeleteBookmark}
      />

      {/* component to render loading modal */}
      {loading && <LoadingModal />}
    </div>
  );
};

export default Main;
