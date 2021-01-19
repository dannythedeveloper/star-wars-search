import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import renderer from 'react-test-renderer';

describe('Search Component', () => {
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});