import { useState } from "react";
import "./counter.css"

function Counter() {

    const [count,setCount] =useState(0)

    function Increment(){
        setCount(count+1)
    }

    function decrement(){
        if(count>0){
            
            setCount(count-1)
        }
    }


    return ( 
        <>

            <div className="counter">
            <div className="content">
            {count===10 ? <p>Yaahho You get the goal</p>:<></>}
            <button className="mybtn" onClick={Increment}>+</button>
            <h1 className="myh1">{count}</h1>
            <button className="mybtn" onClick={decrement}>-</button>
            </div>
            
            </div>
            
        </>
     );
}

export default Counter;