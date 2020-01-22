import React from 'react';
import ToDoList from '../ToDoList';
import {ToDoItem} from '../../model';
import store from '../../store'
import {observer} from "mobx-react";

export class ToDoListPage extends React.Component<any, any> {
    handleRemoveClick(e: React.MouseEvent<HTMLSpanElement>, item: ToDoItem): void {
        const {items} = store;

        store.removeItem(items, item);
    }

    render() {
        const {items} = store;

        return (
            <div className="list-page page">
                <h1 className="title">To Do List</h1>
                {items.length > 0 &&
                    <ToDoList
                        items={items}
                        handleRemoveClick={(e, item) => this.handleRemoveClick(e, item)}
                    />
                }
                {items.length ? '' : 'Seems like u\'ve got nothing to do at the the moment'}
            </div>
        );
    }
};

export default observer(ToDoListPage);
