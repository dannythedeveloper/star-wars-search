import React from 'react';
import './Search.css';

export default function Search(props) {
    return (
        <div className='search'>
            <form 
                className='search-form' 
                onSubmit={props.getSearchInfo}
            >
                <label htmlFor='search-bar' className='search'>Search: </label>
                <input
                    id='search-bar'
                    name='search-bar'
                    className='search-bar'
                    type='text'
                    onChange={props.handleSearch}
                    aria-required='true'
                />
                <label htmlFor='filter-select' className='filter'>Filter: </label>
                <select 
                    id='filter-select'
                    name='filter-select'
                    className='filter-select' 
                    onChange={props.handleFilter} 
                    aria-required='true'
                >
                    <option value=''>Select One</option>
                    <option value='planets'>Planets</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='people'>Characters</option>
                    <option value='films'>Films</option>
                    <option value='species'>Species</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}