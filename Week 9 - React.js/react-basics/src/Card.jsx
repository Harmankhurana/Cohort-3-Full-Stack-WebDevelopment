// A card component where I'm implementing Children and Props - a common component that can be used for multiple purposes

function Children() {
    // Different innerContent - dynamic component
    return <div style={{display : "flex"}}>

    {/* first innerContent */}
        <Card innerContent = {"Hi there"} />

    {/* Second innerContent */}
        <Card innerContent = {<div style={{color : "green"}}>
                "Hi there"
            </ div>} />

    {/* Third innerContent */}
        <Card innerContent = {<div style = {{color :"green"}}>
                "What You want to post"
                <br /> <br />
                <input type="text" />
            </div>}/>

    </div>
    
    // Common card component - static component
    function Card({innerContent}) {
        return (
            <div style = {{background : "black", borderRadius : 10, color : "white", padding : 10, margin : 10}}>
                {innerContent}
            </div>            
        )

    }
}

export default Children