import { Link } from "react-router-dom";
import "./navbar.css"
import ButtonUsage from "../ButtonUsage";


function Navbar() {
    return ( 
        <>
         <ButtonUsage/>
        <div className="main">
            <ul className="nav">
                <li ><Link to={'/'} className="hyperLink">Home</Link></li>
                <li><Link to={"/about"} className="hyperLink">About </Link></li>
                <li ><Link to={"/contact"} className="hyperLink">Contact</Link></li>
                <li><Link to={"/todo"} className="hyperLink" >Todo app</Link></li>
                <li><Link to={"/card"} className="hyperLink">Card</Link></li>
                <li><Link to={"/counter"} className="hyperLink">Counter</Link></li>
                <li><Link to={"/form"} className="hyperLink">Form</Link></li>
                <li><Link to={"/signin"} className="hyperLink">Sign in</Link></li>
            </ul>
          
        </div>    
        </>
     );
}

export default Navbar;