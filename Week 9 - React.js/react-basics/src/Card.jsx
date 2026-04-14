// A card component where I'm implementing children and Props - a common component that can be used for multiple purposes

function ChildrenComponent() {
    // Different children - dynamic component
    return <div style={{display : "flex"}}>

    {/* first children */}
        <Card children = {"Hi there"} />

    {/* Second children */}
        <Card children = {<div style={{color : "green"}}>
                "Hi there"
            </ div>} />

    {/* Third children */}
        <Card children = {<div style = {{color :"green"}}>
                "What You want to post"
                <br /> <br />
                <input type="text" />
            </div>}/>

    {/* all these 3 dynamic components are good but this component is having much better syntax */}
        <Card>
            "Hi there"
        </Card>

    {/* this is the same 3rd component but with a another syntax */ }
        <Card>
            {<div style = {{color :"green"}}>
                "What You want to post"
                <br /> <br />
                <input type="text" />
            </div>}
        </Card>

    </div>
    
    // Common card component - static component
    function Card({children}) {
        return (
            <div style = {{background : "black", borderRadius : 10, color : "white", padding : 10, margin : 10}}>
                {children}
            </div>            
        )
    }
}

export default ChildrenComponent