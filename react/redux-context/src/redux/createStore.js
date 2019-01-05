export const createStore = (state, storeChange) => {
  // 订阅-发布者模式
  const listeners = [];
  let store = state || {};
  const subscribe = (listen) => listeners.push(listen);
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    store = newStore;
    listeners.forEach(item => item());
  }
  const getStore = () => {
    return store;
  }
  return { store, dispatch, subscribe, getStore };
}