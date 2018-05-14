import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';


ReactDOM.render(
    <Provider>
   <App/>
   </Provider>,
    document.getElementById('root')
);
