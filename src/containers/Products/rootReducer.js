import { combineReducers ,createStore,applyMiddleware} from 'redux';
import dataReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;