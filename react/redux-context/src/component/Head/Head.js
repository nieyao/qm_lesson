import React, { Component } from 'react';
import { connect } from '../../redux';
import PropTypes from 'prop-types';

class Head extends Component {
  render () {
    return (
      <div className="head">
        {this.props.head}
      </div>
    )
  }
}

const propsType = {
  store: PropTypes.object
}
export default connect(Head,propsType);