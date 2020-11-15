import React from 'react';
import BaseComponent, { BaseProps } from '../../standard/BaseComponent';

export default class Row extends BaseComponent<BaseProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div
        id={this.props.id}
        className={this.getClassName('row')}
        onClick={this.props.onClick}
        ref={this.props.ref}
      >
        {this.props.children}
      </div>
    );
  }
}
