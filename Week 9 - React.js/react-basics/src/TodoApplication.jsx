// Creating a Todo Component and understanding Lists and Keys

const ListsAndKeys = () => {
    const todos = [{
        title : "Go to Gym",
        done : false,
    }, {
        title : "Eat food",
        done : true,
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