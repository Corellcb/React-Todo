import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(el => (
                <Todo key={el} todo={el.todo} />
            ))}
        </div>
    )
}

export default TodoList;
