// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div>
                    <div>
                        {/* Call PostComponent here with props to render it in the App component */}
                        <PostComponent
                            name={"Harman"}
                            subtitle={"20 followers"}
                            time={"2m ago"}
                            image={"https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750"}
                            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
                        />
                    </div>
                    <div>
                        <div>
                            {/* Call PostComponent here with props to render it in the App component */}
                            <PostComponent
                                name={"Harkirat"}
                                subtitle={"Promotion"}
                                time={"3m ago"}
                                image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                                description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            {/* Call PostComponent here with props to render it in the App component */}
                            <PostComponent
                                name={"Simar"}
                                subtitle={"50 followers"}
                                time={"18m ago"}
                                image={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
                                description={"Here is the roadmap to become a full-stack developer in 2024."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Create a style object to apply styles to the div element in PostComponent
const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

// Create a function component named PostComponent with props to render it in the App component
function PostComponent({ name, subtitle, time, image, description }) {
    // return JSX that will be rendered
    return (
        // Apply style object to the div element
        <div style={style}>
            {/* display the name, subtitle, time, image, and description using props */}
            <div style={{ display: "flex" }}>
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{subtitle}</div>

                    {/* I want this time and clock to be conditionally rendered, that's why putting it in curly braces {} */}
                    { <div style={{display : "flex"}}>
                        <div>{time}</div>
                        <img src="https://www.pngfind.com/pngs/m/589-5899814_png-file-svg-clock-icon-transparent-png.png" alt="clock timer" style={{width : 10, height : 10, paddingLeft : 5, marginTop : 2}}/>                        
                    </div> }

                </div>
            </div>

            <div style={{ fontSize: 14 }}>{description}</div>
        </div>
    );
}

// Export App Component to use it in other components
export default App;