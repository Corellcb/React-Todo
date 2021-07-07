import React from 'react';

const Todo = props => {
    return (
        <div 
            onClick={() => {props.toggleTodo(props.id)}}
            className={`todo${props.completed ? ' completed' : ''}`}
        >
            <p>{props.todo}</p>
        </div>
    )
}

export default Todo;