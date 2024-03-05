import { useEffect, useState } from "react";

function TodoAppRevise() {

    let Data = JSON.parse(localStorage.getItem("Set_Task")) || [
        { task: "Buy iphone-15", complete: true },
        { task: "Buy Car", complete: true },
        { task: "Learn Guitar", complete: false },
        { task: "Buy Bike", complete: false },
      ]

    const [todo,setTodo]=useState("")
    const [myArray, setArray] = useState(Data);
    const [Ctask,setCtask] = useState(0)
    const [Rtask,setRtask] = useState(0)


    function handleForm(e){
        e.preventDefault()
    }

    function handleChange(e){
        setTodo(e.target.value)
    }

    function hnadleTask(){
        if(todo){
            setArray([...myArray,{task:todo,complete:false}])
        }
        
    }

    function handleCheck(index){
        let mynewArray = [...myArray];
        mynewArray[index].complete = !mynewArray[index].complete

        setArray(mynewArray)

        let completeTask = mynewArray.filter(( value,index)=>{
           return value.complete
        })

        let remainingTask = mynewArray.filter((value,index)=>{
            return ! value.complete
        })

        setCtask(completeTask.length)
        setRtask(remainingTask.length)

    }

    function handleDelete(index){

       let deletTask =  myArray.filter((value,id)=>{
            return id !== index
        })

        console.log(deletTask)

        setArray(deletTask)
    }

    useEffect(()=>{
        let myNewarray = [...myArray]
        let completeTask = myNewarray.filter((value, index) => {
            return value.complete;
          });
      
          let remainingTask = myNewarray.filter((value, index) => !value.complete);
    
          setRtask(remainingTask.length)
          setCtask(completeTask.length)

          localStorage.setItem("Set_Task",JSON.stringify(myNewarray))
    },[myArray])

    return (  
        <>
            <div className="todo">
            <form onSubmit={handleForm}>
                <h1>My Todo-App</h1>
                <input type="text"
                    placeholder="Add task Here"
                    value={todo}
                    onChange={handleChange}
                    
                />
                <button onClick={hnadleTask}>Add Task</button>

                {myArray.map((value, index) => (
          <ul key={index}>  
          <input type="checkbox"
            checked={value.complete}
            onClick={()=>{handleCheck(index)}}
          />
           <span
              style={{ textDecoration: value.complete ? "line-through" : "" }}
            >
                {value.task}
            </span>

            <button onClick={()=>{handleDelete(index)}}>Delete</button>
            
          </ul>
          
        ))}
        <p>Complete Task :- {Ctask} </p>
        <p>Remaining Task :- {Rtask} </p>

            </form>    
            </div>
        </>

    );
}

export default TodoAppRevise;