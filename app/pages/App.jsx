import React from 'react';
import Page from '../pages/Page';
import { title, meta, link } from './assets';
import NewTodo from './../containers/new-todo.jsx';
import TodoList from './../containers/todo-list.jsx';

const App = () => (
  <Page title={title} meta={meta} link={link}>
    <div>
      <h1>Todos</h1>
      <NewTodo />
      <TodoList />
    </div>
  </Page>
);

export default App;

