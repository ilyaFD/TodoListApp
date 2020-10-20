import React from 'react';

import './search.css';

const Search = ({searchVal, searchHendler}) => {
    const searchPlaceholder = 'searchPlaceholders';
    return (
        <div className="search">
            <i className="fa fa-search search__icon" aria-hidden="true"></i>
            <input 
                className="field" 
                type="text" 
                placeholder="Search"
                value = {searchVal}
                onChange={e => searchHendler(e)}
            />
        </div>
    );
}
export default Search;