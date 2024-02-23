import { useEffect, useState } from "react"

function Data() {

   const [count,setCount] =useState(0)
   const [title,setTitle] = useState("")
   const [myimg,setImg] = useState('')

    async function Mydata(){
        let data = await fetch(`https://dummyjson.com/products/${count}`)
        let result = await data.json()
        console.log(result)
        setTitle(result.title)
        setImg(result.images[1])
    }
    

    useEffect(()=>{
        Mydata()
    },[count])

    function handletitle(){
        setCount(count+1)
    }

    return ( 
        <>
            <h1> Title :-  {title}</h1>
            <img src={myimg} alt=""/>
            <p>{count}</p>
            <button onClick={handletitle} >Value</button>
        </>
     );
}

export default Data;