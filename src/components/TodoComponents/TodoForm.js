import React from 'react';

class ListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    handleChange = e => {
        this.setState({todo: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type='text'
                    value={this.state.todo}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default ListForm;