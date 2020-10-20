import React from 'react';
import './todo-item-text-edit.css';

const TodoItemTextEdit = ( {label} ) => {

    return (
        <span
            className="todo-list-item__edit"
        >{ label }</span>
    );
}

export default TodoItemTextEdit;
