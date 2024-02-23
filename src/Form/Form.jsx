import { useState } from "react";
import "./form.css"




function Form(){

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [fvalue,setFvalue] = useState("")
    const [lvalue,setLvalue] = useState('')

    function handleForm(e){
        e.preventDefault()
        setFvalue(fname)
        setLvalue(lname)
    }

    function handleFname(e){
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)

    }

    return(
        <>

            <h1 className="myheading">Hello {fvalue} {lvalue}</h1>
            <div className="main1">
            <form onSubmit={handleForm} >
                <label>FirstName</label>
                <input type="text"
                    value={fname}
                    onChange={handleFname}
                />
                <label>LastName</label>
                <input type="text"
                    value={lname}
                    onChange={handleLname}
                />
                <button className="mybtn">Submit form</button>
            </form>
            </div>
           
        </>
    )
}

export default Form;