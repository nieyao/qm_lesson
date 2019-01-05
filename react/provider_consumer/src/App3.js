import React, { Component } from 'react';
import axios from 'axios'
import { bindActionCreators } from 'redux';

class App extends Component {

  componentDidMount () {
    axios.get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
      .then(res => {
        console.log(res);
        this.props.store.dispatch({
          type: 'GET_FILM_DATA',
          payload: res.data.data.films
        })
      })
  }
  render() {
    const films = this.props.store.getState().films;
    console.log(films)
    return (
      <div>
        <ul>
          {
            films.map((films, index) => {
              return (
                <li key={index}>
                  <h2>{films.name}</h2>
                  <img src={films.poster} alt={films.name} />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;