import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(bookmarks);
  return (
    <div className="md:w-1/3 ml-10 bg-gray-300">
      <div>
        <h3 className="text-xl text-black  ">Reading Time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-black ">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
