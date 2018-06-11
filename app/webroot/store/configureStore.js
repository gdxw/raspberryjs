/**
 * create by daixingwang811 on 2018/06/08 
 */

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
  
var buildStore = compose(applyMiddleware(thunk))(createStore);

export default function configureStore(initialState) {
  const store = buildStore(rootReducer, initialState);

  if (module.hot) {
    // webpack 热更新状态模块
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  
  return store;
}