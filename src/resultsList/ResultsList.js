import React from 'react';
import Item from '../item/Item';

export default class ResultsList extends React.Component {
    getResults = () => {
        if(this.props.blankResults) {
            return (
                <h2>There are no results to display. Check your search inputs and try again.</h2>
            );
        }
        let searchList = this.props.results.map((result, index) => {
            return (<Item
                        key={index}
                        name={result.name}
                        title={result.title}    
                    />
            )
        })
        return searchList;
    }

    render() {
        return (
            <div>
                {this.getResults()}
            </div>
        )
    }
}