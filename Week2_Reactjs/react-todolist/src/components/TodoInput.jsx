import React, { useState } from 'react'

function TodoInput({onAdd}) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()) {
            onAdd(inputValue);
            setInputValue('');
        }
    }

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter the tasks to be done." />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoInput
