import React from 'react'

function TodoItem({todo, onDelete}) {
    return (
        <li className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;
