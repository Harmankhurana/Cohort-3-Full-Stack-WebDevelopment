// Inline styling in React allows you to apply CSS styles directly to elements using a JavaScript object

const InlineStylingComponent = () => {
    return (
        <div>
            <InlineStyling />
        </div>
    );

    function InlineStyling() {
        return (
            // Why using Double quotes here? - {} → means JavaScript expression
            // Inside that → { background: "blue" } is a JavaScript object
            // "blue" → is a string value
            <div style = {{background : "blue", color : "white"}}>
                Hello World
            </div>
        )
    };
};

export default InlineStylingComponent


// Either pass it like this
// const componentStyling = {background : "blue", color : "white"}

// function InlineStyling() {
//     return (
//         <div style = {componentStyling}>
//             Hello World
//         </div>
//     );
// };