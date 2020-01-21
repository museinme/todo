import React from 'react';
import {ToDoItem} from '../model';
import store from '../store'
import { observer } from 'mobx-react';
import {Link} from "react-router-dom";

export class ToDoForm extends React.Component<any, any> {

  handleInputChange (e: React.ChangeEvent<HTMLInputElement>): void {
    store.inputValue = e.target.value;
  };

  handleAddClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const {inputValue} = store;

    e.preventDefault();

    if (!inputValue.length) {
      return;
    }

    const item: ToDoItem = {
      text: inputValue,
      id: Math.random()
    };

    store.items =  store.items.concat(item);
    store.inputValue = '';
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
              Add your new to-do
            </label>
            <br/>
            <br/>
            <input
                value={inputValue}
                onChange={(e) => {this.handleInputChange(e);}}
            />
            <button
                onClick={(e) => {this.handleAddClick(e)}}
            >
              Add
            </button>
          </form>
          <div className="message">
            {`${items.length ? 'Check out your ' + items.length : ''} `}{items.length > 0 && <Link to='/list'>to-do's</Link>}
          </div>
        </>
    );
  }
};

export default observer(ToDoForm);
