import { useState } from "react"

function App() {
    return(
        <div style={{background : "#def6e9", height : "100vh"}}>
            <ToggleMessage />
        </div>
    )
}

const ToggleMessage = () => {
    // this is called state defination(defining a new state variable)
    // When the value of a state variable changes,
    // The component that uses the state variables re-renders
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    )
}
export default App