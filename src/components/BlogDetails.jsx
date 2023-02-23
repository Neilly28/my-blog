import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fetch from "./Fetch";

const BlogDetails = () => {
  // useParams hook is needed to get id
  const { id } = useParams();

  //   useNaviage hook is needed to redirect after form submit
  const navigate = useNavigate();

  //   fetch API plus id to get specific blog post
  const {
    data: blog,
    error,
    isPending,
  } = Fetch("http://localhost:8000/blogs/" + id);

  //   handleClick to delete blog post
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    })
      .then(() => {
        console.log("blog was deleted!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="blog-details">
      {/* conditional displays */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by: {blog.author} </p>
          <div> {blog.body} </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
