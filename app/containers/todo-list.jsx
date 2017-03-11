import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './../components/todo-item.jsx';

class TodoList extends React.Component {
    render () {
        return (
            <ul>
                {this.props.todos.map(todo => <TodoItem key={todo}>{todo}</TodoItem>)}
            </ul>
        );
    }
}

const mapStateToProps = ({ todos }) => {
    return {
        todos
    }
}

export default connect(mapStateToProps)(TodoList);
