import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBlogs }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 ">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`title of cover pic ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>
            {reading_time} min read
            <button
              onClick={handleBlogs}
              className="ml-2 text-2xl text-red-500"
            >
              <FaBookmark></FaBookmark>
            </button>
          </span>
        </div>
      </div>
      <h3>{title}</h3>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
