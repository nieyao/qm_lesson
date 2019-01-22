import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

// actionTypes  常量， 声明动作类型
// 统一查看管理及修改 
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

// state  get函数 可以对state进行反回， 或者追加修饰。 state 代表着那棵状态树， 多个reducer 有多个分支， 命名空间
const getVisibility = state => state.visible;
const getCounterValue = state => state.counter.value;


// 初始化状态
const initialState = {
  visible: true,
  counter: {
    value: 0
  }
}

// reducer 多个 由combineReducers 合并
// 将应用的state设计模块化
const counterReducer = function(state = initialState.counter, action) {
  if (action.type === ADD) {
    return { value: state.value + 1 }
  } else if (action.type === SUBTRACT) {
    return { value: state.value - 1 }
  }
  return state;
}

const visibilityReducer = (state = initialState.visible, action) => {
  if (action.type == CHANGE_VISIBILITY) {
    return action.visible
  }
  return state;
}

const rootReducer = combineReducers({
  visible: visibilityReducer,
  counter: counterReducer
})

// 动作函数
const add = () => ({type: ADD});
const subtract = () => ({type: SUBTRACT});
const changeVisibility = (visible) => ({
  type: CHANGE_VISIBILITY,
  visible
})

const store = createStore(rootReducer, initialState);

// redux 架构影响了组件的设计为 函数表现型组件，加 connect 设计了state, dispatch 的高阶容器型组件

function Counter({ value, add, subtract }) {
  return (
    <div>
      <p>Value: { value }</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  )
}

// redux 核心 不管层级， 向redux 发出请示
const CounterConnected = connect(state => ({
  value: getCounterValue(state)
}), 
dispatch => ({
  add: () => dispatch(add()),
  subtract: () => dispatch(subtract())
}))(Counter);

const Visibility = ({changeVisibility}) => (
  <div>
      <button onClick={() => changeVisibility(true)}>Visible</button>
      <button onClick={() => changeVisibility(false)}>Hidden</button>
  </div>
)
const VisibilityConnected = connect(null, dispatch => ({
  changeVisibility: value => dispatch(changeVisibility(value))
}))(Visibility);

const App =  ({ visible }) => (
  <div>
      <VisibilityConnected />
      { visible && <CounterConnected />}
  </div>
);
const AppConnected = connect(
  state => ({
    visible: getVisibility(state)
  })
)(App);



ReactDOM.render(<Provider store={store}>
  <AppConnected />
  </Provider>, document.getElementById('root'))
