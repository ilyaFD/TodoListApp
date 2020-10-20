import React from 'react';
import TodoList from './todo-list';
import AddTodo from './add-todo';
import Error from './error';

import './main.css';

const Main = ({todos, todoStates, editTodoLabel, changeTodoState, addTodoHendler, addTodoValHendler, todoValueAdded, isError, currentDate, moveTodoToTrash, addTodoPriority}) => {
    return (
        <div className="main">
            <AddTodo 
                addTodoHendler={addTodoHendler} 
                addTodoValHendler={addTodoValHendler} 
                todoValueAdded={todoValueAdded}
            />
            {isError ? (<Error />) : null}
            <TodoList 
                todos={todos} 
                todoStates={todoStates}
                editTodoLabel={editTodoLabel}
                changeTodoState={changeTodoState} 
                currentDate={currentDate}
                moveTodoToTrash={moveTodoToTrash}
                addTodoPriority={addTodoPriority}
            />
        </div>
    );
}
export default Main;