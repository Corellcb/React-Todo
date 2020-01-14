import React from 'react';

const Todo = props => {
    return (
        <div onClick={props.toggleTodo} >
            <p>{props.todo}</p>
        </div>
    )
}

export default Todo;