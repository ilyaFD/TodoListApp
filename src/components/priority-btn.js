import React from 'react';

import './priority-btn.css';

const Priority = ({priorityHendler, priorityElementId}) => {

    return (        
        <button 
            type="button" 
            onClick={() => priorityHendler(priorityElementId)}
            className="btn btn_priority" 
        >
            <i className="fa fa-star" aria-hidden="true"></i>
        </button>
    )
}
export default Priority;
