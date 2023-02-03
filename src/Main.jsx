import { useState, useEffect } from "react";
import List from "./List";

const Main = () => {
  // State to hold an array of all bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // State to hold the name and URL of a bookmark
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");


  const currentBookmarks = bookmarks;

  // Use effect hook to retrieve bookmarks from local storage and set them to the state
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Function to add a bookmark to local storage
  const submitAddBookmark = () => {
    setBookmarks([...bookmarks, { name, url }]);
    localStorage.setItem(
      "bookmarks",
      JSON.stringify([...bookmarks, { name, url }])
    );
  };

  return (
    <div>
        {/* form to submit a new bookmark */}
        <h2>Add a bookmark: </h2>
        <div className="form-container">
        <form
          className="form-main"
          onSubmit={async (e) => {
            // Prevents default form refresh, completes input validation before submission
            e.preventDefault();
              // checks if the user is editing or adding a new bookmark
              submitAddBookmark();
              setName("");
              setUrl("");
            }
          }>
          {/* input field to enter bookmark name */}
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
          Add bookmark
        </button>
        </form>
        <h2>Your bookmarks: </h2>
        <button className="delete-all-btn">
          Delete All Bookmarks
        </button>
        {/* renders list of bookmarks */}
        <List
          currentBookmarks={currentBookmarks}
        />

        </div>
      </div>
  );
};

export default Main;
