import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';
import renderer from 'react-test-renderer';

describe('ResultsList Component', () => {
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultsList 
            results={ [
                {
                  birth_year: "19 BBY",
                  eye_color: "Blue",
                  films: ["https://swapi.co/api/films/1/"],
                  gender: "Male",
                  hair_color: "Blond",
                  height: "172",
                  homeworld: "https://swapi.co/api/planets/1/",
                  mass: "77",
                  name: "Luke Skywalker",
                  skin_color: "Fair",
                  created: "2014-12-09T13:50:51.644000Z",
                  edited: "2014-12-10T13:52:43.172000Z",
                  species: ["https://swapi.co/api/species/1/"],
                  starships: ["https://swapi.co/api/starships/12/"],
                  url: "https://swapi.co/api/people/1/",
                  vehicles: ["https://swapi.co/api/vehicles/14/"],
                },
              ] }
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI', () => {
        const tree = renderer.create(<ResultsList
            results={ [
                {
                  birth_year: "19 BBY",
                  eye_color: "Blue",
                  films: ["https://swapi.co/api/films/1/"],
                  gender: "Male",
                  hair_color: "Blond",
                  height: "172",
                  homeworld: "https://swapi.co/api/planets/1/",
                  mass: "77",
                  name: "Luke Skywalker",
                  skin_color: "Fair",
                  created: "2014-12-09T13:50:51.644000Z",
                  edited: "2014-12-10T13:52:43.172000Z",
                  species: ["https://swapi.co/api/species/1/"],
                  starships: ["https://swapi.co/api/starships/12/"],
                  url: "https://swapi.co/api/people/1/",
                  vehicles: ["https://swapi.co/api/vehicles/14/"],
                },
              ] }    
        />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});