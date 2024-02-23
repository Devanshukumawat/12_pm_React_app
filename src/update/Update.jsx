import { useState } from "react";
import "./update.css"

function Update() {

    let a = {firstName:"Devanshu",lastName:"Kumawat"}

    const [value,setValue]=useState(a)

    function updateValue(){
        setValue({firstName:"Manny"})
    }

    return ( 
        <>
            <div className="main">
            <h1>Hello {value.firstName} {value.lastName}</h1>
            <button className="mybtn" onClick={updateValue}>Update</button>
            </div>
            
        </>
     );
}

export default Update;