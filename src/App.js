import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "setImage") {
    return { ...state, image: action.data };
  } else if (action.type === "setName") {
    return { ...state, name: action.data };
  } else if (action.type === "setArray") {
    return { ...state, dataArray: [...state.dataArray, action.data] };
  } else {
    return state;
  }
};

const App = () => {
  const [state, setState] = useReducer(reducer, {
    image: "",
    name: "",
    city: "",
    possition: "",
    dataArray: [],
  });
  console.log(state);

  return (
    <div>
      This is Ashan
      <div>
        <input
          type="text"
          value={state.image}
          onChange={(e) =>
            setState({
              type: "setImage",
              data: e.target.value,
            })
          }
          placeholder="Enter ImageURL"
        />

        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            setState({
              type: "setName",
              data: e.target.value,
            })
          }
          placeholder="Enter Name"
        />
        <button
          onClick={() =>
            setState({
              type: "setArray",
              data: {
                image: state.image,
                name: state.name,
              },
            })
          }
        >
          Sent
        </button>
      </div>
    </div>
  );
};

export default App;
