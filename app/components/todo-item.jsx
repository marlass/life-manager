import React from 'react';

export default (props) => {
    return (
        <li className="todo-item">{props.children}<span> Project: {props.project}</span> <button onClick={(e)=>props.onDelete(props.children,e)}>x</button></li>
    )
}
