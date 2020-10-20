import React from 'react';
import TodoItemLabel from './todo-item-label';
import Multiswitch from './multiswitch';
import Trash from './trash-btn';
import Priority from './priority-btn';

import './todo-list-item.css';

const TodoListItem = ({todo, todoStates, editTodoLabel, changeTodoState, moveTodoToTrash, addTodoPriority}) => {
    const {label, state, id, important} = todo;
    const todoItemStyle = {
        backgroundColor: important ? '#f5eeff' : '#fcfbff',
    };
    return (
        <div className={`todo-list-item__content ${important ? 'todo-list-item__content_active' : ''}`}>
            <TodoItemLabel 
                label={label}
                editTodoLabel={editTodoLabel}
                todoId={id}
            />
            <div className="todo-list-item__footer">
                <Multiswitch 
                    switchStates={todoStates} 
                    switchActiveState={state} 
                    switchHendler={changeTodoState}
                    switchableElementId={id}
                />
                <Priority
                    priorityHendler={addTodoPriority}
                    priorityElementId={id}
                />
                <Trash
                    completeRemoval=""
                    trashHendler={moveTodoToTrash}
                    trashedElementId={id}
                />
            </div>
        </div>
    )
}
export default TodoListItem;
