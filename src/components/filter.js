import React from 'react';
import FilterItem from './filter-item';

import './filter.css';

const Filter = ({todoStates, todos, filterHendler, activeTodoStates, clearFilter, currentDate, activeTodoTrash, filterTrashHendler, activeTodoPriority, filterPriorityHendler}) => {
    const todoStateElements = (todoStates) ? 
        Object.keys(todoStates).map((label, index) => {
            return (
                <FilterItem 
                    key={index}
                    active={activeTodoStates.includes(label)}
                    hendler={filterHendler}
                    label={label}
                    quantity={todos.filter(todo => todo.state == label).length}
                />
            )
        })
    :
        null
    ;
    return (
        <div className="filter">
            <ul className="filter__list">
                <FilterItem 
                    hendler={clearFilter}
                    label='all'
                    quantity={todos.length}
                />  
                <FilterItem 
                    active={activeTodoStates.includes('done today')}
                    hendler={filterHendler}
                    label='done today'
                    quantity={todos.filter(todo => todo.completionDate == currentDate()).length}
                />  
            </ul>
            <h6 className="sidebar-title">By states</h6>  
            <ul className="filter__list">
                {todoStateElements}
            </ul>
            <h6 className="sidebar-title">By priority</h6>  
            <ul className="filter__list">
                <FilterItem 
                    active={activeTodoPriority}
                    hendler={filterPriorityHendler}
                    label='important'
                    quantity={todos.filter(todo => todo.important).length}
                />
            </ul>
            <h6 className="sidebar-title">Trash</h6>  
            <ul className="filter__list">
                <FilterItem 
                    active={activeTodoTrash}
                    hendler={filterTrashHendler}
                    label='trash'
                    quantity={todos.filter(todo => todo.isTrash).length}
                />
            </ul>
        </div>
    )
}
export default Filter;