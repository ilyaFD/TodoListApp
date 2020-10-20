import React from 'react';
import './add-todo-field.css';

const AddTodoField = ({addTodoValHendler, todoValueAdded}) => {
    return (
        <input
            className="field"
            type="text"
            placeholder="add todo" 
            value = {todoValueAdded}
            onChange={e => addTodoValHendler(e)}
        />
    );
}
export default AddTodoField;
