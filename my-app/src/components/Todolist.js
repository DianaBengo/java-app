import React, {useState} from "react";
import Todo from './Todo';

export default function Todolist() {
    const [todos, setTodos] =useState([
        { task: "visit paris"},
        { task: "visit berlin"},
        { task: "visit tokyo"},
        { task: "visit cairo"},
    ]);

    const removeItem =(itemToRemove) => {
setTodos(todos.filter((todo) => itemToRemove !== todo.task));
    };
 
    const todosData = todos.map((todo) => {
        return <Todo item={todo.task}  removeTodo={removeItem} />;
    });

    return (
        <div>
            <h1>React App</h1>
            <ul>{todosData}</ul>

        </div>
    );
}