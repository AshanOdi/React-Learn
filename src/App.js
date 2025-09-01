import './App.css';
import Main from './Components/Main';

const name = "ashan";
const age = 26;

const myObj = [ 
  {
    name: name,
    age: age,
    city: "kolkata",
    position: "developer"
  }.

]

const myObj = [ 
  {
    name: name,
    age: age,
    city: "kolkata",
    position: "developer"
  }.

]


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

      </div>
    </>
  );
}
 
export default App;
