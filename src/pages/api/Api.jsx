import { useEffect, useState } from "react";
import styles from "./Api.module.css";

const Api = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async (currentPage, postsPerPage) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("api fetch error");
      }
    };
    getData(currentPage, postsPerPage);
  }, []);
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div key={post?.id} className={styles.card}>
            <h2>{post?.title}</h2>
            <p>userID: {post?.userId}</p>
            <p>{post?.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
