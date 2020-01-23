import React from 'react';
import ToDoList from '../ToDoList';
import {ToDoItem} from '../../model';
import store from '../../store'
import {observer} from "mobx-react";

function handleRemoveClick(e: React.MouseEvent<HTMLSpanElement>, item: ToDoItem): void {
    const {items} = store;
    store.removeItem(items, item);
}

export const ToDoListPage = observer(() => {
    const {items} = store;

    return (
        <div className="list-page page">
            <h1 className="title">To Do List</h1>
            {
                items.length > 0 &&

                <ToDoList
                    items={items}
                    handleRemoveClick={(e, item) => handleRemoveClick(e, item)}
                />
            }
            {items.length ? '' : 'Seems like u\'ve got nothing to do at the the moment'}
        </div>
    )
});
