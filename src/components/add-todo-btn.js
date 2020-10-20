import React from 'react';

import './add-todo-btn.css';

const AddTodoBtn = ({addTodoHendler}) => {
    return (
        <button 
            type="button" 
            onClick={() => addTodoHendler()} 
            className="btn btn_purple" 
        >
            <span className="btn__content">
                <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
        </button>
    );
}
export default AddTodoBtn;