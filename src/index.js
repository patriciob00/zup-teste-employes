import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

// redux needs
import { Provider } from 'react-redux';
import Store from './config/redux-store';

ReactDOM.render(
    <Provider store={ Store }>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
