import React from 'react';
import './Item.css';

export default function Item(props) {
    return (
        <div className='item'>
            <h2>{props.name ? props.name : props.title}</h2>
        </div>
    )
}