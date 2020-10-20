import React from 'react';
import AddTodoField from './add-todo-field';
import AddTodoBtn from './add-todo-btn';

import './add-todo.css';

const AddTodo = ({addTodoHendler, addTodoValHendler, todoValueAdded}) => {
    return (
        <div className="add-todo">
            <AddTodoField addTodoValHendler={addTodoValHendler} todoValueAdded={todoValueAdded}/>
            <AddTodoBtn addTodoHendler={addTodoHendler}/>
        </div>
    );
}
export default AddTodo;