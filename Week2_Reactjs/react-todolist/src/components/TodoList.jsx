import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todos, onDelete}) {
    return (
        <ul className="todo-list"> 
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            })}
        </ul>
    )
}

export default TodoList;
