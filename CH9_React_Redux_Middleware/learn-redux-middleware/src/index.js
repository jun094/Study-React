import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
//import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import ReduxThunk from 'redux-thunk';

//const store = createStore(rootReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger))); //redux-logger를 사용하고 싶을 때는 반드시 logger가 맨 뒤에 !!!

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
