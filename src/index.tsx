import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './styles/app.css';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
) , document.getElementById('todo-app') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
