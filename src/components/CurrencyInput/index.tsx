import React, { RefObject } from 'react';
import BaseInputComponent, { BaseInputProps } from '../../standard/BaseInputComponent';

import Label from '../Label';
import { CurrencyOptions, formatCurrency, getSymbol } from './currencyHelper';

interface Props extends BaseInputProps {
  currency: string;
  locale?: string;
  isRequired?: boolean;
  label?: string;
  isEmptyLabel?: boolean;
  onChange?: (value: string) => void;
}

interface State {
  value: string;
}

export default class CurrencyInput extends BaseInputComponent<Props, State> {
  constructor(props) {
    super(props);
    this.getCurrencyOptions = this.getCurrencyOptions.bind(this);
    this.formatWithGrouping = this.formatWithGrouping.bind(this);
    this.formatWithoutGrouping = this.formatWithoutGrouping.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      value: ''
    };
  }

  public componentDidUpdate(prevProps: Readonly<Props>) {
    if (!this.state.value) { return; }

    if (this.props.currency && this.props.currency !== prevProps.currency ||
          this.props.locale && this.props.locale !== prevProps.locale) {
      this.formatWithGrouping();
    }
  }

  public componentDidMount() {
    this.setState({
      value: this.props.value
    });
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
        <div className="rlight-textinput-space" ref={this.props.ref}>
          <input
            id={this.props.id}
            name={this.props.name}
            type="text"
            tabIndex={this.props.tabIndex}
            className={this.getClassName('rlight-textinput')}
            placeholder={this.props.placeholder}
            disabled={this.getDefault(this.props.disabled, false)}
            value={this.state.value}
            aria-label={this.props.ariaLabel || this.props.label}
            aria-required={this.props.ariaRequired || this.props.isRequired}
            onFocus={() => this.formatWithoutGrouping(this.state.value)}
            onChange={(e: React.ChangeEvent<any>) => {
              if (e.target) {
                this.formatWithoutGrouping(e.target.value);
              }
            }}
            onBlur={this.formatWithGrouping}
            onClick={this.props.onClick}
            ref={this.props.ref}
          />
        </div>
      </React.Fragment>
    );
  }

  private getCurrencyOptions(): CurrencyOptions {
    return {
      currency: this.props.currency,
      locale: this.props.locale
    };
  }

  private onChange(): void {
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  private formatWithGrouping(): void {
    this.setState({
      value: formatCurrency(this.state.value, {
        useGrouping: true,
        ...this.getCurrencyOptions()
      })
    }, this.onChange);
  }

  private formatWithoutGrouping(value: string): void {
    this.setState({
      value: formatCurrency(value, this.getCurrencyOptions())
    }, this.onChange);
  }
}
