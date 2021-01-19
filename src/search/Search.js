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
                    className='search-bar'
                    type='text'
                    onChange={props.handleSearch}
                    required
                />
                <label htmlFor='filter-select' className='filter'>Filter: </label>
                <select 
                    className='filter-select' 
                    onChange={props.handleFilter} 
                    required
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