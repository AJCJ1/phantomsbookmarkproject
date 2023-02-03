import Bookmark from "./Bookmark";

const List = ({currentBookmarks, handleEditBookmark}) => {

  return (
    <div className="list-main">
      <div className="list-container">
        {currentBookmarks &&
          currentBookmarks.map((bookmark, index) => (
            <Bookmark
              className="link"
              key={index}
              name={bookmark.name}
              url={bookmark.url}
              id={index}
              // runs the edit bookmark func, args are each mark and its index
              // then will set edit index to index and bookmarks name/url state
              // accordingly
              onEdit={() => handleEditBookmark(bookmark, index)}
            />
          ))
        }
        {!localStorage.bookmarks &&
          <h2>No Bookmarks yet, why not add one?</h2>
        }
      </div>
    </div>
  );
};

export default List;
