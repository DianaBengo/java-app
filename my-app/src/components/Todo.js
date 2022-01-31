import React from "react";

export default function Todo(props) {
    const remove = () => {
        props.removeTodo(props.item);
    }
    return (
        <div>
            <li>props.item</li>
            <button>edit</button>
            <button>onClick={remove}x</button>
        </div>
    );
}