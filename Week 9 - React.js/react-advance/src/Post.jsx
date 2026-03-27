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
                {(time !== undefined) ? <div style={{display : "flex"}}>
                    <div>{time}</div>
                    <img src="https://www.pngfind.com/pngs/m/589-5899814_png-file-svg-clock-icon-transparent-png.png" alt="Clock timer" style={{width : 12, height : 12}}/>
                </div> : null}
            </div>
        </div>
        <div style={{fontSize : 12}}>
            {description}
        </div>
    </div>
}