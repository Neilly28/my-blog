import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First post",
      body: "This is the first post.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Second post",
      body: "This is the second post.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Third post",
      body: "This is the third post.",
      author: "Bob Johnson",
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Bob Johnson")}
        title="Bob's Blogs"
      />
    </div>
  );
};

export default Home;
