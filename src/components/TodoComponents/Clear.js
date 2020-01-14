import React from 'react';

const Clear = props => {
    return (
        <div>
            <button onClick={props.todoClear} >Clear Completed</button>
        </div>
    )
}

export default Clear;