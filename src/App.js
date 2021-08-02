import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ListPage from './ListPage';
import FormPage from './FormPage';
import { LinkProvider } from './context/LinkContext';
import Header from './components/header/Header';
import './App.scss';

const App = () => (
  <>
    <LinkProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route path="/add">
            <FormPage />
          </Route>
        </Switch>
      </Router>
    </LinkProvider>
  </>
);

export default App;
