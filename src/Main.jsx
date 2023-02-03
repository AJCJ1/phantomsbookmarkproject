import { useState, useEffect } from "react";
import List from "./List";

const Main = () => {
  // State to hold an array of all bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // State to hold the name and URL of a bookmark
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

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
        <List />

        </div>
      </div>
  );
};

export default Main;
