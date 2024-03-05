import "./mycard.css"
import myimage from "./media/1691224446516.jpeg"
import instagram   from "./media/instagram-icon.png"
import linkdin from "./media/linkedin-icon.png"
import snap from "./media/snapchat-icon.png"
import twitter from "./media/twitter-icon.png"

function Card (props){
    console.log(props)

    return(
        <>
            <div className="card">
                <img src={myimage} alt=""/>
                <h1 className="cardtitle">{props.name}</h1>
                <p className="carddesc">{props.Desc}</p>
                <ul className="sociallink">
                    <li><img src={instagram} alt=""/></li>
                    <li><img src={linkdin} alt=""/></li>
                    <li><img src={snap} alt=""/></li>
                    <li><img src={twitter} alt=""/></li>
                </ul>
                <button className="mybtn">More Info</button>
            </div>
        </>
    )
}

export default Card;