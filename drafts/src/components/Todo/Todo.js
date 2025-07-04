import React, {Component} from "react";
import {ReactComponent as DeleteIcon} from '../../icons/minus.svg';
import './Todo.css'


const Todo = ({text, onToggleCompleted, onDelete, completed}) => (
    <div>
      <input
          type="checkbox"
          className="TodoList_checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />

        <p className="TodoList__text">{text}</p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={onDelete}
        >
          <DeleteIcon width='24' height='24'/>
        </button>
    </div>
)

export default Todo;