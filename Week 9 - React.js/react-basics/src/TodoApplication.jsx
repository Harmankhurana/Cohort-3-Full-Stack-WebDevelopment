// Creating a Todo Component and understanding Lists and Keys
// When rendering lists, each item should have a unique key prop for React to track changes efficiently.
// When I don't use the keys for list items, a warning comes in console (Each child in a list should have a unique "key" prop.)

const ListsAndKeys = () => {
    const todos = [{
        title : "Go to Gym",
        done : false,
    }, {
        title : "Eat food",
        done : true,
    }, {
        title : "Study React",
        done : true,
    }, {
        title : "Clean Room",
        done : false,
    }
];

    const todosComponent = todos.map(todo => < Todo title={todo.title} done={todo.done}/>)
    return (
        <div>
            {todosComponent}
        </div>
    )
};

function Todo({title, done}) {
    return (
        <div>
            {title} - {done ? "Done!" : "Not Done!"}
        </div>
    )
}

export default ListsAndKeys