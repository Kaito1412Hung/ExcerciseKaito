import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todo, onDelete}) {
    return (
        <ul className="todo-list"> 
            {todo.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            })}
        </ul>
    )
}

export default TodoList;
