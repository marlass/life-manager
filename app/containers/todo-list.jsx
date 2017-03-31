import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './../components/todo-item.jsx';
import { removeTask } from './../actions/task';

class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.onDelete = this.onDelete.bind(this);
    }

    render () {
        return (
            <ul>
                {this.props.tasks.map(task => <TodoItem key={task.name} onDelete={this.onDelete} project={task.project}>{task.name}</TodoItem>)}
            </ul>
        );
    }

    onDelete (task, event) {
        this.props.removeTask(task);
        event.preventDefault();
    }
}

const mapStateToProps = ({ tasks }) => {
    return {
        tasks
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask(task){
        dispatch(removeTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
