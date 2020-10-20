import React from 'react';

import './trash-btn.css';

const Trash = ({completeRemoval, trashHendler, trashedElementId}) => {

    return (        
        <button 
            type="button" 
            onClick={() => trashHendler(trashedElementId)}
            className="btn btn_trash" 
        >
            <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    )
}
export default Trash;
