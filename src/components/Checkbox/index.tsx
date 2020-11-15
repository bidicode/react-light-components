import React from 'react';
import BaseCheckboxComponent, { BaseCheckboxProps } from '../../standard/BaseCheckboxComponent';

import Label from '../Label';

interface Props extends BaseCheckboxProps {
  isRequired?: boolean;
  label?: string;
  isEmptyLabel?: boolean;
  text?: string;
  onChange?: (value: boolean) => void;
}

export default class Checkbox extends BaseCheckboxComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
        {(this.props.label || this.props.isEmptyLabel) &&
          <Label
            value={this.props.label}
            isRequired={this.props.label ? this.props.isRequired : false}
            for={this.props.label ? this.props.id : undefined}
          />
        }
        <div className="rlight-checkbox-wrapper">
          <input
            id={this.props.id}
            name={this.props.name}
            type="checkbox"
            tabIndex={this.props.tabIndex}
            className={this.getClassName('rlight-checkbox')}
            placeholder={this.props.placeholder}
            disabled={this.getDefault(this.props.disabled, false)}
            value={this.props.value}
            aria-label={this.props.ariaLabel || this.props.label}
            aria-required={this.props.ariaRequired || this.props.isRequired}

            checked={this.props.checked}
            onChange={(e: React.ChangeEvent<any>) => {
              if (this.props.onChange && e.target && typeof e.target.checked === 'boolean') {
                this.props.onChange(e.target.checked);
              }
            }}
            onClick={this.props.onClick}
            ref={this.props.ref}
          />
          {this.props.text &&
            <label className="rlight-checkbox-space">{this.props.text}</label>}
        </div>
      </React.Fragment>
    );
  }
}
