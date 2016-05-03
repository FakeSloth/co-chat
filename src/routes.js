import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';

function About() {
  return <h1>hi</h1>;
}

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default routes;
