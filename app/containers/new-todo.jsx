import React from "react";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { addTask } from "./../reducers/task";
import styles from "./new-todo.css";

const cx = classNames.bind(styles);

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      project: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>
            <label className={cx("label")} htmlFor="name">Zadanie</label><br />
            <input
              className={cx("input")}
              id="name"
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </p>
          <p>
            <label className={cx("label")} htmlFor="project">Projekt</label>
            <br />
            <input
              className={cx("input")}
              id="project"
              type="text"
              name="project"
              onChange={this.onChangeProject}
              value={this.state.project}
            />
          </p>
          <button className={cx("button")} type="submit">Dodaj</button>
        </form>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.newTask(this.state);
    this.setState({
      name: "",
      project: "",
    });
  }

  onChange(event) {
    this.setState({ name: event.target.value });
  }

  onChangeProject(event) {
    this.setState({ project: event.target.value });
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newTask(task) {
      dispatch(addTask(task));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewTodo);
