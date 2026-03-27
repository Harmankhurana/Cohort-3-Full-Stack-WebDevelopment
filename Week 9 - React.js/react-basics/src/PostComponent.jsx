function PostComponent() {
    return(
        <div>
            <Post />
        </div>
    )
}

const style = {
    width : 200, 
    backgroundColor : "white",
    borderRadius : 10,
    borderColor : "grey",
    borderWidth : 1,

}

function Post() {
    return (
        <div style={style}>
            <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} alt="Logo image" style={{width : 20, height : 20, borderRadius : 20}}/>
        </div>
    )
}

export default PostComponent