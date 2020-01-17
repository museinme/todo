import * as React from 'react';
import ToDoList from './ToDoList';
import './App.css';
import {IAppState} from "./index";


export class ToDoApp extends React.Component<any, IAppState> {

  state: IAppState = {items: [], inputValue: ''};

  private textInput = React.createRef<HTMLInputElement>();

  componentDidMount() {
    const node = this.textInput.current;

    if(node) {
      node.value = '';
    }
  };

  render() {
    return (
        <React.Fragment>
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
                ref={this.textInput}
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
              items={this.state.items}
              handleRemoveClick={(e, item) => this.handleRemoveClick(e, item)}
          />
        </React.Fragment>
    );
  }

  handleInputChange (e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ inputValue: e.target.value });
  };

  handleAddClick(e: React.MouseEvent<HTMLButtonElement>) {

    e.preventDefault();

    if (!this.state.inputValue.length) {
      return;
    }

    const toDoItem = {
      text: this.state.inputValue,
      id: Math.random()
    };

    this.setState(state => ({
      items: this.state.items.concat(toDoItem),
      inputValue: ''
    }));

  }

  handleRemoveClick(e: React.MouseEvent<HTMLSpanElement>, item: number): void {
    this.setState(state => ({
      items: this.state.items.filter(filterItem => filterItem !== item)
    }));
  }
};

export default ToDoApp;
