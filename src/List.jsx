import Bookmark from "./Bookmark";

const List = () => {

  return (
    <div className="list-main">
      <div className="list-container">
            <Bookmark />
        {!localStorage.bookmarks &&
          <h2>No Bookmarks yet, why not add one?</h2>
        }
      </div>
    </div>
  );
};

export default List;
