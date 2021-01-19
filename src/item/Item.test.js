import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import renderer from 'react-test-renderer';

describe('Item Component', () => {
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Item />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI', () => {
        const tree = renderer.create(<Item />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});