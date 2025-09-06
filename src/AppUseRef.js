import { useState, useRef } from "react";

const App = () => {
  const [myData, setMyData] = useState({
    image: "",
    name: "",
    // city: "",
    // possition: "",
  });

  console.log("rerendering");

  const imageRef = useRef();
  const nameRef = useRef();
  //   const cityRef = useRef();
  //   const possitionRef = useRef();

  const setDataHandler = () => {
    setMyData({
      image: imageRef.current.value,
      name: nameRef.current.value,
    });
  };

  return (
    <div>
      This is Ashan
      <div>
        <input type="text" ref={imageRef} placeholder="Enter ImageURL" />
        <input type="text" ref={nameRef} placeholder="Enter Name" />
        <button onClick={setDataHandler}>Sent</button>
        <p>{myData?.image}</p>
        <p>{myData?.name}</p>
      </div>
    </div>
  );
};

export default App;

// me kalla kre therum ganna re render wen na kiyala. next api balau atta usage eka
// const App = () => {
//   const [imageUrl, setImageUrl] = useState("");
//   const imageUrlRef = useRef(0);

//   console.log("rerender");

//   useEffect(() => {
//     console.log("use effect Running");
//     imageUrlRef.current = imageUrl;
//   });

//   return (
//     <div>
//       This is Ashan
//       <div>
//         <input
//           type="text"
//           value={imageUrl}
//           onChange={(e) => {
//             setImageUrl(e.target.value);
//           }}
//           placeholder="Enter ImageURL"
//         />
//         <input type="text" onChange={(e) => {}} placeholder="Enter Name" />
//         <button onClick={() => {}}>Sent</button>
//         <p>{imageUrlRef.current}</p>
//       </div>
//     </div>
//   );
// };
