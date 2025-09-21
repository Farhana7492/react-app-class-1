// import baselink from "./Config";
// import Demo from "./Config";
import { useEffect, useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";

function UseState() {
    let [like ,setLike] = useState(0);
    useEffect(()=>{
      console.log("UseEffect Called");
    },[like])
  return (
    <>
    {/* <Header /> */}
    <div className="container text-center">
        
        <div>UseState</div>
    {/* {baselink.link}
    <h3>{Demo}</h3> */}
    <h2>Like : {like}</h2>
    <button onClick={() => setLike(like + 1)}>❤️</button>
    {like > 0 && 
    <button onClick={() => setLike(like - 1)}>💔</button>
    }
    </div>
    {/* <Footer /> */}
    </>
  )
}   
export default UseState;