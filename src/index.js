import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { creatStore } from 'redux'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
