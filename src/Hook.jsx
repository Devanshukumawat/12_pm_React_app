import { useState } from "react";

function Hook() {

    const [value,setValue] = useState(19)

    function updateValue(){
        setValue(200)
    }

    return ( <>

        <h1>Value : - {value} </h1>

        <button onClick={updateValue}>Update value</button>

    </> );
}

export default Hook;