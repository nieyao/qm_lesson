import React, { Component } from 'react';
//在组件中static 一定要给他传参
import PropTypes from 'prop-types';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import { createStore, storeChange } from './redux';

export default class App extends Component {
  // 这个属性里面的值， 在内部 打破层次， 拿到在顶级组件中共享的状态
  render () {
    return (
      <div className="App">
        <Head />
        <Body />
      </div>
    )
  }
}