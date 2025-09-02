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

let myVar = "Amila";

function App() {

  const [myVar,setMyVar] = useState("Amila2");

  const clickHandler = () => {
  setMyVar("Kumara");
  console.log(myVar);
  }
 
  const { city } = myObj;
  const mainBlock =  myData?.map( ({name,city,position,image},index) => {
          return <Main key={index} name = {name}  city={city}  position={position} image={image} />;
  });
  
  return (
    <div className='mainContainer'>
      <div>
        This Is Appjs div
        <h1>ASHANnnnn</h1>
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
