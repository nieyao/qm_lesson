redux 父子组件，  兄弟组件传值很麻烦
context 新的希望  按组件传值 react-redux 基于它实现 
全局状态
打破层次关系，实现共享
redux ？ context

- context API redux 依靠它
childContextTypes = {
  store: PropTypes.object
}
getChildContext () {
  return { store: {}}
}

context 四步
- ChildContextTypes 顶层组件中规定类型
- getChildContext 顶层组件中设置数据
- 后代组件通过contextTypes 规定数据类型
- 后代组件this.context 获取数据

全局的store 太烦了，不是react 数据流的语法的烦，context api 代码的重复，违反了dry (don't repeat yourself)
声明周期 _upState() contextTypes 
connect react-redux HOC

- connect 封装， 有关的context的操作都交给它
- 后代组件，只需要做自己的事