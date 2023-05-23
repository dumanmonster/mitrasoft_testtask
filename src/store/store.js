import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

// Создание middleware Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Создание хранилища Redux с применением middleware Redux Saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Запуск корневой саги
sagaMiddleware.run(rootSaga);

export default store;
