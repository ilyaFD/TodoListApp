import React from 'react';

import './filter-item.css';

const FilterItem = ({active, hendler, label, quantity}) => {
    return (
        <li
            className={`filter__item ${(active) ? "filter__item_active" : ""}`}
            onClick={() => hendler(label)} 
        >
            {label + ' (' + quantity + ')'}
        </li>
    )
}
export default FilterItem;