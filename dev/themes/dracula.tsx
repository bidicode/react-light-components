import React from 'react';
import './../../styles/themes/dracula/custom.scss';
import './../../styles/themes/dracula/index.scss';

import Test from '../test';

export default class DraculaTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    document.body.className = 'rlight-theme-dracula';
  }

  public render() {
    return (
      <Test theme="Dracula"/>
    );
  }
}
