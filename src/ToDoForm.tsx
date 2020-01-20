// @ts-nocheck
import React from 'react';
import ToDoList from './ToDoList';
import {IToDoAppState, ToDoItem} from './model';
import store from './store'
import { observer } from 'mobx-react';

export class ToDoForm extends React.Component<any, IToDoAppState> {

  handleInputChange (e: React.ChangeEvent<HTMLInputElement>): void {
    store.inputValue = e.target.value;
  };

  handleAddClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const {items, inputValue} = store;

    if (!inputValue.length) {
      return;
    }

    e.preventDefault();

    const toDoItem = {
      text: inputValue,
      id: Math.random()
    };

    store.items =  items.concat(toDoItem);
    store.inputValue = '';
    console.log(store);
  }

  handleRemoveClick(e: React.MouseEvent<HTMLSpanElement>, item: ToDoItem): void {
    const {items} = store;
    store.items = items.filter(filterItem => filterItem.id !== item.id);
  }

  render() {
    const {items, inputValue} = store;

    return (
        <>
          <h1 className={'main-title'}>to-do list</h1>
          <form
              id="to-do-form"
              className={'todo-form'}
          >
            <label htmlFor="todo-input">
              Добавьте свою тудушку
            </label>
            <br/>
            <br/>
            <input
                type="textarea"
                id="to-do-input"
                onChange={(e) => {this.handleInputChange(e);}}
            />
            <button
                onClick={(e) => {this.handleAddClick(e)}}
            >
              Add
            </button>
          </form>
          <ToDoList
              items={items}
              handleRemoveClick={(e, item) => this.handleRemoveClick(e, item)}
          />
        </>
    );
  }
};

export default observer(ToDoForm);
