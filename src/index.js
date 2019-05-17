import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './AppRouter';
import { Store } from './store/reducers';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={Store}>
        <AppRouter />
    </Provider>, document.getElementById('root'))
