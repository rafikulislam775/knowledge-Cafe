import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBlogs, handleMarkRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blog</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBlogs={handleBlogs}
          handleMarkRead={handleMarkRead}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBlogs: PropTypes.func.isRequired,
  handleMarkRead: PropTypes.func,
};
export default Blogs;
