import React from 'react';
import Search from './search';
import Filter from './filter';

import './sidebar.css';

const Sidebar = ({searchVal, searchHendler, todoStates, todos, filterHendler, activeTodoStates, clearFilter, currentDate, activeTodoTrash, filterTrashHendler, activeTodoPriority, filterPriorityHendler}) => {
    return (
        <aside className="sidebar">
            <h6 className="sidebar-title">Filter todos</h6>  
            <Search 
                searchVal={searchVal}
                searchHendler={searchHendler}
            />
            <Filter
                todoStates ={todoStates}
                todos={todos} 
                filterHendler={filterHendler}
                clearFilter={clearFilter}
                activeTodoStates={activeTodoStates}
                currentDate={currentDate}
                activeTodoTrash={activeTodoTrash}
                filterTrashHendler={filterTrashHendler}
                activeTodoPriority={activeTodoPriority}
                filterPriorityHendler={filterPriorityHendler}
            />

        </aside>
    );
}
export default Sidebar;