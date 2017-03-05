import React from 'react';
import { Route } from 'react-router';
import { App } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default () => {
  return (
    <Route path="/" component={App} />
  );
};
