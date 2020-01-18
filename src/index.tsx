import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './ToDoApp';

import './styles/app.css';

ReactDOM.render(<ToDoApp/>, document.getElementById('todo-list') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
