import todoApp from './reducers';
import { createStore } from 'redux';

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }]
};

const configureStore = () => {
  const store = createStore(
    todoApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
//console.log(store.getState());

export default configureStore;