import React from 'react';

import './todo-item-label.css';

const TodoItemLabel = ( {label, editTodoLabel, todoId} ) => {

    return (
        <input
            className="field todo-list-item__label"
            type="text"
            value = {label}
            onChange={e => editTodoLabel(e, todoId)}
        />
    );
}

export default TodoItemLabel;
