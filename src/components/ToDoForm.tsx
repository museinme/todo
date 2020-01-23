import React from 'react';
import {ToDoItem} from '../model';
import store from '../store'
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';

function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    store.setInputValue(e.target.value);
};

function handleAddClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const {items, inputValue} = store;

    e.preventDefault();

    if (!inputValue.length) {
        return;
    }

    const NewItem: ToDoItem = {
        text: inputValue,
        id: Math.random()
    };

    store.addItem(items, NewItem);
    store.resetInputValue();
}

export const ToDoForm = observer (() => {
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
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
              />
              <button
                  onClick={(e) => {
                    handleAddClick(e)
                  }}
              >
                Add
              </button>
            </form>
            <div className="message">
              {`${items.length ? 'Check out your ' + items.length : ''} `}{items.length > 0 &&
            <Link to='/list'>to-do's</Link>}
            </div>
          </>
      )
});
