// this is because tsconfig file 
// we import all from src starting from src/ ...
import React from 'react';
import { App } from 'components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);