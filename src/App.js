import { useState } from 'react';
import './App.css';


const App = () => {

    const [imgUrl,setImgUrl] = useState("");
    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [position,setPosition] = useState("");

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
                console.log({
                imgUrl,
                name,
                city,
                position
            })
            setImgUrl((pre)=>{
                if (pre.length > 0) {
                    return ""; }
                else { return pre; }
            })

            setName((pre)=>{
                (pre.length > 0 ? "" : pre); 
            });
        }
        }>Submit</button>
    </div>
    <div className="main_Right">

    </div>

  </div> 
);
}

export default App;