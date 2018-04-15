
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promiseSagaMiddleware from 'redux-promise-middleware';
import rootSaga from './root-saga';
import RootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = applyMiddleware(promiseSagaMiddleware(), sagaMiddleware)(createStore)(RootReducer, devTools)

sagaMiddleware.run(rootSaga);

export default Store;
