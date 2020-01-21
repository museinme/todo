import React from 'react';
import {ToDoItem, IToDoListProps} from '../model';

export const ToDoList = ({items, handleRemoveClick}: IToDoListProps) => {
  return (
      <ul className="todo-list">
        {items.map((item: ToDoItem, index: number) => (
            <li
                className="item"
                key={item.id}
            >
              <span className="number">To-Do #{index + 1}</span>
              <div className="text">{item.text}</div>
              <span
                  className="remove"
                  onClick={(e) => handleRemoveClick(e, item)}
              >
                  Remove
              </span>
            </li>
        ))}
      </ul>
  );
};

export default ToDoList;
