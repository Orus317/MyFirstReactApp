import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check-activate'}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && 'Icon-check-span--activate'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };