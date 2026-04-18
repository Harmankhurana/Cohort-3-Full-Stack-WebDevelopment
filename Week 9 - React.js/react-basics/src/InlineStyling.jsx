// Inline styling in React allows you to apply CSS styles directly to elements using a JavaScript object

const InlineStylingComponent = () => {
    return (
        <div>
            <InlineStyling />
        </div>
    );

    function InlineStyling() {
        return ( 
            <div style = {{background : "blue", color : "white"}}>
                Hello World
            </div>
        )
    };
};

export default InlineStylingComponent