import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import AppRouter from './AppRouter';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
