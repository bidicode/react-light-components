import React from 'react';

import Test from './../test';

export default class DefaultTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    document.body.className = '';
  }

  public render() {
    return (
      <Test theme="Default"/>
    );
  }
}
