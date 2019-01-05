import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './Main';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/dashboard/monitor" component={Main} />
        </div>
      </Router>
    )
  }
}
export default App;