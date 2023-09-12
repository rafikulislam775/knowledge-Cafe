import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";
function App() {
  const [blogs, setBlogs] = useState([]);
  const handleBlogs = (blog) => {
    console.log("blog");
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleBlogs={handleBlogs}></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
