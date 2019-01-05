import React, { Component } from 'react';
import Results from './Results';
import Search from './Search'

class Beer extends Component {
  componentDidMount () {
    this.loadBeers();
  }

  componentDidUpdate (prevProps) {
    const currentSearchTerm = this.props.match.params.searchTerm;
    const oldSearchTerm = prevProps.match.params.searchTerm;
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeers(currentSearchTerm);
    }
    console.log(currentSearchTerm); 
  }
  state = {
    beers: [],
    loading: true
  }
  loadBeers  = (searchTerm = "hops") => {
    this.setState({
      loading: true
    })
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({
        beers: localBeers,
        loading: false
      });
      return;
    }
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(data => data.json())
    .then(data => {
      const beers = data.data || [];
      // console.log(data);
      this.setState({
        beers,
        loading: false
      })
      localStorage.setItem(
        `search-${searchTerm}`,
        JSON.stringify(this.state.beers)
      );
    })
    .catch(err => console.error(err));
  }

  render () {
    return (
      <div className="wrapper">
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
}
export default Beer;