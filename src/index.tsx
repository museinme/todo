import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToDoApp from './ToDoApp';

import './index.css';

export type ToDoItem = {
    text: string,
    id: number,
}

export interface IListProps {
    items: ToDoItem[],
    handleRemoveClick: (e: React.MouseEvent<HTMLSpanElement>, item: number) => void,
}

export interface IAppState {
    items: ToDoItem[],
    inputValue: string;
}

ReactDOM.render(<ToDoApp/>, document.getElementById('todo-list') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
