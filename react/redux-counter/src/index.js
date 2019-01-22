import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counter from './reducers';
import Counter from './components/Counter';
// 单独管理状态的地方
// 状态与UI统一的，状态计算器 reducer
const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(<Counter value={store.getState()} 
onIncrement={() => store.dispatch({type: 'INCREMENT'})}
onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,rootEl);

render();
store.subscribe(render);
serviceWorker.unregister();
