import Bookmark from "./Bookmark";

const List = ({currentBookmarks}) => {

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
