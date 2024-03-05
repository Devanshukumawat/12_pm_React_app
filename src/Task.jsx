import { useEffect, useState } from "react";

function Task() {

    const [value,setValue] = useState(0)
    const [name,setName] = useState("Devanshu")

    useEffect(()=>{
        console.log("useeffect hook")
    },[name])

    function handleUpdate(){
        setValue(value+1)
    }

    function hnadleName(){
        setName("Manny")
    }
    

    return ( 
        <>
            <h1>UseEffect hook</h1>
            <p>My value :-  {value}</p>
            <p>{name}</p>
            <button onClick={hnadleName}>Update name</button>
            <button onClick={handleUpdate}>Update value</button>
           

        </>
     );
}

export default Task;