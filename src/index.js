import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//const greeting = React.createElement('h1', {}, 'Hello World!');
const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}
const greeting = <h1>Hello there Current date: {getCurrentDate()}</h1>

ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
