const Todo = (props) => {
    const todoClasses = ["bold", "italic"];
    if(props.todo.complete){
        todoClasses.push("line-through")
    }
    return (
    <div>
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <input onChange={(e) => {
            props.handleComplete(props.i);
        }} checked={props.todo.complete} type={"checkbox"} />
        <button onClick={(e) => {
            props.handleDelete(props.i);
        }}>Delete</button>
    </div>
    )
    }
export default Todo;