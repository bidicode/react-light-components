import React from 'react';
import BaseLabelComponent, { BaseLabelProps } from '../../standard/BaseLabelComponent';

interface Props extends BaseLabelProps {
  isRequired?: boolean;
  requiredClassName?: string;
}

export default class Label extends BaseLabelComponent<Props, {}> {
  constructor(props) {
    super(props);
    this.renderIsRequired = this.renderIsRequired.bind(this);
  }

  public renderIsRequired() {
    return (
      <React.Fragment>
        {this.props.isRequired &&
          <span
            className={
              this.getCustomClassName('rlight-is-required', this.props.requiredClassName)
            }
          >*
          </span>
        }
      </React.Fragment>
    );
  }

  public render() {
    return (
      <React.Fragment>
        <label
          id={this.props.id}
          className={this.getClassName('rlight-title')}
          htmlFor={this.props.for}
          onClick={this.props.onClick}
          ref={this.props.ref}
        >
          {this.props.value &&
            <React.Fragment>
              {this.props.value}{this.renderIsRequired()}
            </React.Fragment>}
        </label>
      </React.Fragment>
    );
  }

}
