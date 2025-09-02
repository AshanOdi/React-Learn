import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import {myObj, myData} from './Data/myData';

// const NewBlock = () => {
//   return (
//     <>
//       { myData?.map( ({name,city,position},index) => {
//           return <Main key={index} name = {name}  city={city}  position={position} />
//         })
//         } 
//     </>
//   );
// }



function App() {

  const [myVar,setMyVar] = useState(0);

  const clickHandler = () => {
  setTimeout( () => {
    console.log("clicked");
    setMyVar((pre) => pre+1);
  },3000);
  }
 
  const { city } = myObj;
  const mainBlock =  myData?.map( ({name,city,position,image},index) => {
          return <Main key={index} name = {name}  city={city}  position={position} image={image} />;
  });

  const [InputVal, setInputVal] = useState("");
  console.log(InputVal);

  const inputChangeHandler = (event, data) => {
    event.preventDefault();
    console.log(data);
    setInputVal(event.target.value);
  };

  return (
    <div className='mainContainer'>
      <div>
        This Is Appjs div
        <h1>{InputVal}</h1>
        <h1>{myVar}</h1>
        <p>ashan odithya</p>
        <p>{city}</p>
      </div>
      <div className='mainBlockContainer'>{mainBlock}</div>
      <br></br>
      <button style={
        {
          fontSize: "20px",
          padding: "7px 12px",
          border: "1px solid red",
        }}
        onClick={clickHandler}
        > Click Me</button>

        <br /><br />

        <input 
        style={{
          border: "1px solid blue",
          padding: "7px 12px",
          fontSize: "20px",
        }} 
        type='text'
        placeholder='Enter Something'

        onChange={ (e) => { 
          inputChangeHandler(e, InputVal);

        } }
        />
        

        {/* <Main>
          <h5>this is children prop</h5>  
          <h5> {name} </h5>  
          <h5> {age} </h5>  
          <h5> {myObj.name} </h5>  
          <h5> {myObj.age} </h5>  
          <h5> {city} </h5>  
        </Main>

        <Main name="a" city="aa" position="aaa" />
        <Main name="b" city="bb" position="bbb" />
        <Main />
        <Main />
        <Main />

        <p>**************************</p> */}
        {/* { myData.map( (ele) => {
          return <Main name = {ele.name}  city={ele.city}  position={ele.position} />
        })
        }  */}

        {/* { myData.map( ({name,city,position},index) => {
          return <Main key={index} name = {name}  city={city}  position={position} />
        })
        }  */}

        {/* <NewBlock /> */}

      
    </div>
  );
}
 
export default App;
