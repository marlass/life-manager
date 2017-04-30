import React from "react";
import classNames from "classnames/bind";
import styles from "./todo-item.css";

const cx = classNames.bind(styles);

export default props => {
  return (
    <li className="todo-item">
      <span className={cx("task")}>{props.children}</span>
      <span className={cx("project")}> Project: {props.project}</span>
      {" "}
      <button className={cx("remove")} onClick={e => props.onDelete(props.children, e)}>x</button>
    </li>
  );
};
