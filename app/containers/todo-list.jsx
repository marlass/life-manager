import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './../components/todo-item.jsx';
import { removeTodo } from './../actions/todo';

class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.onDelete = this.onDelete.bind(this);
    }

    render () {
        return (
            <ul>
                {this.props.todos.map(todo => <TodoItem key={todo.name} onDelete={this.onDelete} project={todo.project}>{todo.name}</TodoItem>)}
            </ul>
        );
    }

    onDelete (task, event) {
        this.props.removeTodo(task);
        event.preventDefault();
    }
}

const mapStateToProps = ({ todos }) => {
    return {
        todos
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo(todo){
        dispatch(removeTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
