import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todo';

class NewTodo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            project: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <label htmlFor="name">Zadanie</label><br />
                        <input id="name" type="text" name="name" onChange={this.onChange} value={this.state.name} />
                    </p>
                    <p>
                        <label htmlFor="project">Projekt</label><br />
                        <input id="project" type="text" name="project" onChange={this.onChangeProject} value={this.state.project} />
                    </p>
                    <button type="submit">Dodaj</button>
                </form>
            </div>
        );
    }

    onSubmit (event) {
        event.preventDefault();
        this.props.newTodo(this.state);
        this.setState({
            name: '',
            project: ''
        })
    }

    onChange (event) {
        this.setState({ name: event.target.value })
    }

    onChangeProject (event) {
        this.setState({ project: event.target.value })
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


