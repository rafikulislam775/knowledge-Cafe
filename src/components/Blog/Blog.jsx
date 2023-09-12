import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return <div></div>;
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
