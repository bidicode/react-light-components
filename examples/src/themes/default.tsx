import React from 'react';

import Components from '../components';

export default class DefaultTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    document.body.className = '';
  }

  public render() {
    return (
      <Components theme="Default"/>
    );
  }
}
