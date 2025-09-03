import { useState } from 'react';
import './App.css';
import Unit from './Components/Unit';


const App = () => {

    // const [imgUrl,setImgUrl] = useState("");
    // const [name,setName] = useState("");
    // const [city,setCity] = useState("");
    // const [position,setPosition] = useState("");

    const [inputData,setInputData] = useState({
        imgUrl:"",
        name:"",
        city:"",
        position:""
    });
    console.log(inputData);

    const [myData,setMyData] = useState([]);

    console.log(myData);

  return( 
  <div className="main_container">
    <div className="main_left">
        {/* <input type="text" value={imgUrl} onChange={(e)=>{
            e.preventDefault()
            setImgUrl(e.target.value)
        }}/>
        <input type="text" value={name} onChange={(e)=>{
            e.preventDefault()
            setName(e.target.value)
        }}/>
        <input type="text" value={city} onChange={(e)=>{
            e.preventDefault()
            setCity(e.target.value)
        }}/>
        <input type="text" value={position} onChange={(e)=>{
            e.preventDefault()
            setPosition(e.target.value)
        }}/> */}

        <input type="text"  value={inputData.imgUrl} onChange={(e)=>{
            e.preventDefault()
            setInputData((preInputData)=>{
                return {...preInputData, 
                    imgUrl: e.target.value}
            })
        }} />
        <input type="text"  value={inputData.name} onChange={(e)=>{
            e.preventDefault()
            setInputData((preInputData)=>{
                return {...preInputData, 
                    name: e.target.value}
            })
        }} />
        <input type="text"  value={inputData.city} onChange={(e)=>{
            e.preventDefault()
            setInputData((preInputData)=>{
                return {...preInputData, 
                    city: e.target.value}
            })
        }} />
        <input type="text"  value={inputData.position} onChange={(e)=>{
            e.preventDefault()
            setInputData((preInputData)=>{
                return {...preInputData, 
                    position: e.target.value}
            })
        }} />
        <button
            className="submit_btn"
            onClick={() => {
                setMyData((prev) => [
                    ...prev,
                    {
                        image: inputData.imgUrl,
                        name: inputData.name,
                        city: inputData.city,
                        position: inputData.position
                    }
                ]);

                // Reset all form fields at once
                setInputData({
                imgUrl: '',
                name: '',
                city: '',
                position: ''
                });
            }}
            >
            Submit
            </button>

        </div>
    <div className="main_Right">
    {
       myData?.map(({ image, name, city, position }, index) => (
      <Unit
        key={index}
        img={image}
        name={name}
        city={city}
        position={position} />))
    }
    </div>

  </div> 
);
}

export default App;