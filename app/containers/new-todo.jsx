import React from 'react';
import { connect } from 'react-redux';
import addTodo from './../actions/todo';

class NewTodo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            newTodo: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="newTodo" onChange={this.onChange} value={this.state.newTodo} />
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        );
    }

    onSubmit (event) {
        event.preventDefault();
        this.props.newTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        })
    }

    onChange (event) {
        this.setState({
            newTodo: event.target.value,
        })
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newTodo(todo){
        dispatch(addTodo(todo))
    }
  }
}

export default connect(null,mapDispatchToProps)(NewTodo);


