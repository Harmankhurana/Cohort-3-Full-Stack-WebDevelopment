const style = {
    width : 200,
    backgroundColor : "white",
    borderRadius : 10,
    borderColor : "gray",
    borderWidth : 1,
    padding : 20,
}

export function PostComponent({name, time, subtitle, image, description}) {
    return <div style={{style}}>
        <div style={{display : "flex"}}>
            <img src={image} alt="profile image" style={{
                width : 30,
                height : 30,
                borderRadius : 20,
            }}/>
            <div style={{fontSize : 10, marginLeft : 10}}>
                <b>
                    {name}
                </b>
                <div>{subtitle}</div>
            </div>
        </div>

    </div>
}