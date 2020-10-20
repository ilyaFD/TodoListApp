import React from 'react';

import './todo-list-divider.css';

const Divider = ({todoCreationDate}) => {
    return <div className="todo-list__divider">{todoCreationDate}</div>;
}
export default Divider;