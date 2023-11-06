import { useEffect, useState } from "react";
import styles from "./Api.module.css";
import Pagination from "../../components/pagination/Pagination";

const Api = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const getData = async (currentPage, postsPerPage) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`
        );
        const data = await response.json();
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(totalCount / 10));
        setPosts(data);
      } catch (error) {
        console.log("api fetch error");
      }
    };
    getData(currentPage, postsPerPage);
  }, [currentPage]);
  return (
    <>
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
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Api;
