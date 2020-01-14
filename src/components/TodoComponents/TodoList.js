import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(el => (
                <Todo toggleTodo={props.toggleTodo} id={el.id} key={el.id} completed={el.completed} todo={el.todo} />
            ))}
        </div>
    )
}

export default TodoList;
