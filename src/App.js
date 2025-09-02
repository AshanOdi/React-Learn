import { useState } from 'react';
import './App.css';
import Unit from './Components/Unit';


const App = () => {

    const [imgUrl,setImgUrl] = useState("");
    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [position,setPosition] = useState("");

    const [myData,setMyData] = useState([]);

    console.log(myData);

  return( 
  <div className="main_container">
    <div className="main_left">
        <input type="text" value={imgUrl} onChange={(e)=>{
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
        }}/>
        <button className="submit_btn" onClick={() =>
            {
                
            setMyData((pre)=>{
                return [...pre, {
                image:imgUrl,
                name:name, 
                city:city,
                position:position
                }];
            })

            setImgUrl((pre)=>{
                if (pre.length > 0) {
                    return ""; }
                else { return pre; }
            })

            setName((pre)=>(pre.length > 0) ? "" : pre);
            setCity((pre)=>(pre.length > 0) ? "" : pre);
            setPosition((pre)=>(pre.length > 0) ? "" : pre);
        }
        }>Submit</button>
    </div>
    <div className="main_Right">
        {
            myData?.map( (data,index) => {
                return <Unit key={index} img={data.image} name={data.name} city={data.city} position={data.position} />
            })
        }
    </div>

  </div> 
);
}

export default App;