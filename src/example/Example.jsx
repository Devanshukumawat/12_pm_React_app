import hellostyle from "../style/example.css"

function Example() {

    const myStyle = {backgroundColor:"green",color:"white"}

    return ( 
        <>
            <h1 style={myStyle}>Example </h1>
            <h2 className={hellostyle.d1}>Hello class</h2>
        </>
     );
}

export default Example;