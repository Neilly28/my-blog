import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Fetch from "./Fetch";

const Home = () => {
  const { data, isPending, error } = Fetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
