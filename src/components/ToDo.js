import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
                <span>{ this.props.description }  </span>
                <span>
                    <button onClick={ this.props.deleteTodo } type="button">Delete this Item</button>
                </span>
            </li>
        );
    }
}

export default ToDo;