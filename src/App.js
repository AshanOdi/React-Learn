import './App.css';
import Main from './Components/Main';
import {name, age, myObj, myData} from './Data/myData';

const NewBlock = () => {
  return (
    <>
      { myData?.map( ({name,city,position},index) => {
          return <Main key={index} name = {name}  city={city}  position={position} />
        })
        } 
    </>
  );
}

function App() {

  const { city } = myObj;
  
  return (
    <>
      <div>
        This Is Appjs div
        <h1>ASHANnnnn</h1>
        <p>ashan odithya</p>

        <Main>
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

        <p>**************************</p>
        {/* { myData.map( (ele) => {
          return <Main name = {ele.name}  city={ele.city}  position={ele.position} />
        })
        }  */}

        {/* { myData.map( ({name,city,position},index) => {
          return <Main key={index} name = {name}  city={city}  position={position} />
        })
        }  */}

        <NewBlock />


      </div>
    </>
  );
}
 
export default App;
