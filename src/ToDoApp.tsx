import React from 'react';
import ToDoList from './ToDoList';
import {IToDoAppState, ToDoItem} from './typings/typings';

export class ToDoApp extends React.Component<any, IToDoAppState> {

  state: IToDoAppState = {items: [], inputValue: ''};

  handleInputChange (e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ inputValue: e.target.value });
  };

  handleAddClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const {items, inputValue} = this.state;

    if (!inputValue.length) {
      return;
    }

    e.preventDefault();

    const toDoItem = {
      text: inputValue,
      id: Math.random()
    };

    this.setState({
      items: items.concat(toDoItem),
      inputValue: ''
    });
  }

  handleRemoveClick(e: React.MouseEvent<HTMLSpanElement>, item: ToDoItem): void {
    this.setState(({items}) => ({
      items: items.filter(filterItem => filterItem.id !== item.id)
    }));
  }

  render() {
    const {items, inputValue} = this.state;

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
                value={inputValue}
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

export default ToDoApp;
