import { useMemo, useState } from "react";

const inputhandle = (inputValue) => {
  let data;
  for (let i = 0; i < 1000000000; i++) {
    data = i;
  }
  return;
};

const App = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  console.log("rerendering");

  //   const imageData = useMemo(() => inputhandle(image), [image]);
  // dan image url type krddi witri slow wenne. mkd image url eka wena
  // karoth witri image url ek wens wenne. ethkt witri imput handle ek use wenne
  return (
    <div>
      This is Ashan
      <div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter ImageURL"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <button>Sent</button>
        <p>{image}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default App;
