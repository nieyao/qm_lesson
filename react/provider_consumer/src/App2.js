import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import enhanceComponent from './enchanceComponent.jsx';

var Content = (props) => <p>I am {props.name}</p>;

Content.propTypes = {
  name: PropTypes.string
}

var EnhancedContent = enhanceComponent(Content);

class App extends Component {
  render() {
    return (
      <EnhancedContent name="Contentcomponent" />
    );
  }
}

export default App;
