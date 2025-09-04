import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const User = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log("useEffect running");
    const getData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      if (data) {
        setData(data);
      }
    };
    getData();
    return () => {
      console.log("Cleanup process running");
      getData();
    };
  }, [id]);

  return (
    <div>
      This is User Page
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : null}
      <Link to="/contact">Back</Link>
    </div>
  );
};
export default User;
