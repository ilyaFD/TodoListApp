import React from 'react';
import TodoListItem from './todo-list-item';
import Divider from './todo-list-divider';

import './todo-list.css';

const TodoList = ({todos, todoStates, editTodoLabel, changeTodoState, currentDate, moveTodoToTrash, addTodoPriority}) => {
    const elements = todos.map((todo, index) => {
        const todoCreationDate = todo.creationDate == currentDate() ? 'Today' : todo.creationDate;
        const prevTodoCreationDate = (todos[index - 1]) ? todos[index - 1].creationDate : todos[index].creationDate;
        const isChangeDate = todoCreationDate < prevTodoCreationDate;
        const isFirstTodo = index == 0;
        return (
            <li key={index}  className="todo-list-item">
                {isChangeDate || isFirstTodo ? (<Divider todoCreationDate={todoCreationDate} />) : null}
                <TodoListItem 
                    todo={todo} 
                    todoStates={todoStates} 
                    editTodoLabel={editTodoLabel}
                    changeTodoState={changeTodoState}
                    moveTodoToTrash={moveTodoToTrash}
                    addTodoPriority={addTodoPriority}
                />
            </li>
        )
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}
export default TodoList;
