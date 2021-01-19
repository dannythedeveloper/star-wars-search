import React from 'react';
import Item from '../item/Item';

export default class ResultsList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.results.map((result, index) => {
                        return (
                            <Item
                                key={index}
                                name={result.name}
                                title={result.title}    
                            />
                        )
                    })
                }
                    
            </div>
        )
    }
}