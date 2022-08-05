import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/", {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <img src={"/loading.gif"} alt="spinner"></img>}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>By: {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
