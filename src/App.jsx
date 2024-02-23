import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./web/Navbar";
import Home from "./web/Home";
import About from "./web/About";
import Contact from "./web/Contact";
import Todoapp from "./Todoapp/Todoapp";
import Card from "./card/Card";
import Counter from "./counter/Counter"
import Form from "./Form/Form"
import SignInSide from "./SignInSide";


function App() {
    return ( 
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home name="Home page"/>} />
                <Route path="/about" element={<About about = "About page"/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/todo" element={<Todoapp/>}/>
                <Route path="/card" element={<Card/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/signin" element={<SignInSide/>} />
            </Routes>

        </BrowserRouter>
        </>
     );
}

export default App;





