// In React, components are the building blocks of the user interface. They allow you to split the UI into independent, 
// re-usable pieces that can be thought of as custom, self-contained HTML elements (but here im making a static post component)
function PostComponent() {
    return(
        <div style={{background : "#dfe6e9", height : "100vh"}}>
            <div style={{display : "flex", justifyContent : "center"}}>
                <div>
                    <div>
                        <Post />
                    </div>
                    <br />
                    <div>
                        <Post />
                    </div>
                    <br />
                    <div>
                        <Post /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

const style = {
    width : 200, 
    backgroundColor : "white",
    borderRadius : 10,
    borderColor : "grey",
    borderWidth : 1,
    padding : 20,
}

function Post() {
    return (
        <div style={style}>
            <div style={{display : "flex"}}>
                <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} alt="Logo image" style={{width : 30, height : 30, borderRadius : 20}}/>
                <div style={{fontSize : 10, marginLeft : 10}}>
                    <b>
                       100xDevs 
                    </b>
                    <div>23,888 followers</div>
                    <div>12m</div>
                </div>
            </div>
            <div style={{fontSize : 12}}>
                What to know to win big? Check out how these folks won $6000 in bounties.
            </div>          
        </div>

    )
}

export default PostComponent