import { useState, useEffect } from "react";

function App() {
  const [apiId, setApiId] = useState("1");
  const [data, setData] = useState({});
  const [search, setSearch] = useState(0);

  // console.log(apiId);
  // console.log(data);

  useEffect(() => {
    console.log("useEffecr running ");

    const apiCall = async () => {
      console.log("apiCall running ");
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${apiId}`
      );
      const data = await res.json();

      if (data) {
        setData(data);
        console.log("data fetched");
      }
    };

    if (apiId.length > 0 && Number(apiId) > 0 && Number(apiId) <= 100) {
      console.log("useeffect if Condition");
      apiCall();
    }

    return () => {
      console.log("cleanup");
      apiCall();
    };
    //eslint-disable-next-line
  }, [search]);

  return (
    <div>
      <input
        type="test"
        placeholder="enter id"
        onChange={(e) => {
          e.preventDefault();
          setApiId(e.target.value);
        }}
      />
      <button onClick={() => setSearch((pre) => (pre === 0 ? 1 : 0))}>
        Search
      </button>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
