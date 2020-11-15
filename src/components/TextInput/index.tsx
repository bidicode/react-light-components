import React from 'react';
import BaseInputComponent, { BaseInputProps } from '../../standard/BaseInputComponent';

import Label from '../Label';

interface Props extends BaseInputProps {
  isRequired?: boolean;
  label?: string;
  isEmptyLabel?: boolean;
  onChange?: (value: string) => void;
}

export default class TextInput extends BaseInputComponent<Props, {}> {
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
        <div className="rlight-textinput-space">
          <input
            id={this.props.id}
            name={this.props.name}
            type={this.getType()}
            tabIndex={this.props.tabIndex}
            className={this.getClassName('rlight-textinput')}
            placeholder={this.props.placeholder}
            disabled={this.getDefault(this.props.disabled, false)}
            value={this.props.value}
            aria-label={this.props.ariaLabel || this.props.label}
            aria-required={this.props.ariaRequired || this.props.isRequired}

            onChange={(e: React.ChangeEvent<any>) => {
              if (e.target && this.props.onChange) {
                this.props.onChange(e.target.value);
              }
            }}
            onClick={this.props.onClick}
            ref={this.props.ref}
          />
        </div>
      </React.Fragment>
    );
  }
}
