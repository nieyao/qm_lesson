// 1 context api 共享状态机制
// 2 react-redux 基于它
// 3 Provider 的能力
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './context';
import Header from './Header.jsx';

class App extends React.Component {
  render () {
    return (
      <Provider value={{title: 'React In Patterns'}}>
        <Header />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));