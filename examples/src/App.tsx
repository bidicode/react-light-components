import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './../../styles/index.scss';
import '../styles/dev.scss';

import DefaultTheme from './themes/default';
import DraculaTheme from './themes/dracula';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => <DefaultTheme/>}
          />
          <Route
            path="/themes/dracula"
            render={() => <DraculaTheme/>}
          />
        </Switch>
      </HashRouter>
    );
  }
}
