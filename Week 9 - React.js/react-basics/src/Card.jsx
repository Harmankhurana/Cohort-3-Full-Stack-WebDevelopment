// A card component where I'm implementing Children and Props - a common component that can be used for multiple purposes

function Children() {
    // Different innerContent
    return <div>
        <Card innerContent={"Hi there"} />
    </div>
    
    // Common card component
    function Card({innerContent}) {
        return (
            <div style = {{background : "black", borderRadius : "10", color : "white", padding : 10, margin : 10}}>
                {innerContent}
            </div>            
        )

    }
}

export default Children