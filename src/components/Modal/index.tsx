import React from 'react';
import BaseComponent, { BaseProps } from '../../standard/BaseComponent';

interface Props extends BaseProps {
  isVisible?: boolean;
}

export default class Modal extends BaseComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      this.props.isVisible &&
        <div
          id={this.props.id}
          className="rlight-modal-body"
          onClick={this.props.onClick}
          ref={this.props.ref}
        >
          <div className={this.getClassName('rlight-modal-content')}>
            {this.getDefault(this.props.children, '')}
          </div>
        </div>
    );
  }
}
