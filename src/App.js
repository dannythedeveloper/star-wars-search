import React from 'react';
import ErrorBoundary from './ErrorBoundary';
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
      touched: false,
      loading: false, 
      blankResults: false
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

    this.setState({ loading: true })

    this.timeout = setTimeout(() => {
      fetch(`${BASE_URL}${filter}/?search=${input}`)
        .then((response) => {
          if (!response.ok) {
            return response.json().then((event) => Promise.reject(event));
          } else return response.json();
        })
        .then(data => {
          if (data.count < 1) {
            this.setState({ blankResults: true, loading: false })
          } else {
            this.setState({
              results: [...data.results],
              loading: false,
              blankResults: false
            })
          }
        })
        .catch(error => {
          alert(`Something went wrong: ${ error }. Please try refreshing the page.`)
        });
      },
    1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Star Wars API Search</h1>
        </header>
        <Search
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          getSearchInfo={this.getSearchInfo}
          blankResults={this.state.blankResults}
        /> 
        <ErrorBoundary>
        <ResultsList 
          results={this.state.results}
          loading={this.state.loading}
          blankResults={this.state.blankResults}
        />
        </ErrorBoundary>
      </main>
    );
  }
};
