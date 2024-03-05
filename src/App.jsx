import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./web/Home";
import About from "./web/About";
import Contact from "./web/Contact";
import Todoapp from "./Todoapp/Todoapp";
import Card from "./card/Card";
import Counter from "./counter/Counter"
import Form from "./Form/Form"
import SignInSide from "./SignInSide";
import TodoAppRevise from "./Todoapp/TodoAppRevise";
import Task from "../src/Task";
import DrawerAppBar from "./DrawerAppBar";
import SignUp from "./Singup";
import MuiTest from "./MuiTest";
import Test from "./Test";





function App() {
    return ( 
        <>
        <BrowserRouter>
            <DrawerAppBar/>
            <Routes>
                <Route path="/" element={<SignInSide/>}/>
                <Route path="/home" element={<Home name="Home page"/>} />
                <Route path="/about" element={<About about = "About page"/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/todo" element={<Todoapp/>}/>
                <Route path="/card" element={<Card name="Devanshu" Desc="Hello Class"/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/signin" element={<SignInSide/>} />
                <Route path="/todorevise" element={<TodoAppRevise/>} />
                <Route path="/task" element={<Task/>} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/mui" element={<MuiTest/>}/>
                <Route path="/useRef" element={<Test/>}/>
             
            </Routes>

        </BrowserRouter>
        </>

       
     );
}

export default App;





