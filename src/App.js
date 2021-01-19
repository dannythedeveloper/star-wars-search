import React from 'react';
import './App.css';
import ResultsList from './resultsList/ResultsList';
import Search from './search/Search';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchInput: '',
      filter: '',
    }
  };

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value,
    })
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  };

  getSearchInfo = (e) => {
    e.preventDefault();
    const BASE_URL = `https://swapi-thinkful.herokuapp.com/api/`
    let input = this.state.searchInput;
    input = input.split(' ').join('+');
    let filter = this.state.filter;

    fetch(`${BASE_URL}${filter}/?search=${input}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: [...data.results]
        })
      })
      .catch(error => {
        alert(`Something went wrong: ${ error }. Please try refreshing the page.`)
      });
  };

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Star Wars API</h1>
        </header>
        <Search
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          getSearchInfo={this.getSearchInfo}
        /> 
        <ResultsList results={this.state.results}/>
      </main>
    );
  }
};
