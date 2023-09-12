import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBlogs }) => {
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
        <Blog key={blog.id} blog={blog} handleBlogs={handleBlogs}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
