import './App.css';
import React, { useState } from "react"
import Todo from "./components/Todo.jsx"


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleNewSubmit = (e) =>{
    e.preventDefault();
    if(newTodo.length === 0){
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([...todos, todoItem]);
    setNewTodo("")
  };
  
  const handleDelete = (delIdx) => {
    const filterTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filterTodos);
  }

  const handleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx === i){
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
  return (
    <div className="App">
      <form onSubmit={(e) =>{
        handleNewSubmit(e)
      }
      }>
        <input onChange={(e) => {
          setNewTodo(e.target.value);
        }}
          type="text" 
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      {todos.map((todo, i) =>{
          return ( 
          <Todo 
            key={i} 
            i={i}
            todo={todo} 
            handleComplete={handleComplete} 
            handleDelete={handleDelete}
            />
          );
    })}
    </div>
  );
}

export default App;
