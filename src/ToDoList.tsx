import * as React from 'react';
import './App.css';
import {IListProps} from "./index";

export const ToDoList = ({items, handleRemoveClick}: IListProps) => {

  return (
      <ul className={'todo-list'}>
        {items.map((item: Object, index: number) => (
            <li
                className={'item'}
                key={index}
            >
              <span className="number">To-Do Number: {index + 1}</span>
              <div className="text">{'item.text'}</div>
              <span
                  className="remove"
                  onClick={(e) => handleRemoveClick(e, item)}
              >удалить</span>
            </li>
        ))}
      </ul>
  );
};

export default ToDoList;
