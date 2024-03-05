// import { useRef, useState } from "react";

import { useReducer } from "react";

// import { useEffect, useRef, useState } from "react";

// function Test() {
//     const [value,seValue] = useState("Dev")

//     let useDom = useRef("")

//     console.log(useDom)

//     function handleReset(){
//         seValue(" ")
//         useDom.current.focus()
//     }

//     function handleColor(){
//         useDom.current.style.color="red"
//     }

//     return ( 
//         <>
//             <h1>UseRef Hook</h1>
//             <input type="text" value={value} ref={useDom} />
//             <button onClick={handleReset}>Reset</button>
//             <button onClick={handleColor}>Color</button>
//         </>
//      );
// }

// export default Test;


// function Test() {

//     const useDom = useRef(0)
//     const [value,setValue] = useState("")

//     useEffect(()=>{
//         useDom.current = useDom.current+1
//     },[value])

//     return ( 
//         <>
//             <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
//             <h1>Value:- {useDom.current}</h1>
//         </>
//      );
// }


// export default Test;


function Test() {

    let InitialState =0

    function reducer(state,action){
        switch(action){
            case "Increment":
                return state+1
            case "Decrement" :
                return state-1  
            default:
                return state    
        }
    }

   const [state,disPatch] = useReducer(reducer,InitialState)

    return (
        <>
            <button onClick={()=>{disPatch("Increment")}}>+</button>
            <h1>{state}</h1>
            <button onClick={()=>{disPatch("Decrement")}}>-</button>
        </>
      );
}

export default Test;





