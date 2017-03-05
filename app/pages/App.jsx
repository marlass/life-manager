import React from 'react';
import Page from '../pages/Page';
import { title, meta, link } from './assets';

const App = props => (
  <Page title={title} meta={meta} link={link}>
    <div>Hello world</div>
  </Page>
);

export default App;

