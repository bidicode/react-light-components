import React, { RefObject } from 'react';
import BaseInputComponent, { BaseInputProps } from '../../standard/BaseInputComponent';

import Label from '../Label';
import { CurrencyOptions, formatCurrency, getAmount, getSymbol } from './currencyHelper';

interface OnChangeResponse {
  amount: number;
  formatted: string;
  symbol: string;
}

interface Props extends BaseInputProps {
  currency: string;
  locale?: string;
  isRequired?: boolean;
  label?: string;
  isEmptyLabel?: boolean;
  value?: never;
  amount: number;
  onChange?: (OnChangeResponse) => void;
}

interface State {
  value: string;
  amount: number;
}

export default class CurrencyInput extends BaseInputComponent<Props, State> {
  constructor(props) {
    super(props);
    this.getCurrencyOptions = this.getCurrencyOptions.bind(this);
    this.format = this.format.bind(this);
    this.onChange = this.onChange.bind(this);

    const amount = (this.props.amount || 0);
    this.state = {
      value: amount.toFixed(2),
      amount
    };
  }

  public componentWillMount() {
    this.format(this.state.value, { useGrouping: this.props.disabled });
  }

  public componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.currency && this.props.currency !== prevProps.currency ||
          this.props.locale && this.props.locale !== prevProps.locale ||
          this.props.amount !== prevProps.amount) {
      const value = (this.props.amount || 0).toFixed(2);
      this.format(value, { useGrouping: this.props.disabled });
    }
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
            onFocus={() => this.format(this.state.value)}
            onChange={(e: React.ChangeEvent<any>) => {
              if (e.target) {
                this.format(e.target.value, { triggerOnChange: true });
              }
            }}
            onBlur={() => this.format(this.state.value, { useGrouping: true })}
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
      this.props.onChange({
        amount: this.state.amount,
        formatted: formatCurrency(this.state.value, {
          useGrouping: true,
          ...this.getCurrencyOptions()
        }),
        symbol: getSymbol(this.getCurrencyOptions())
      });
    }
  }

  private format(value: string, options?: {
    useGrouping?: boolean;
    triggerOnChange?: boolean;
  }): void {
    this.setState({
      value: formatCurrency(value, {
        useGrouping: !!options?.useGrouping,
        ...this.getCurrencyOptions()
      }),
      amount: getAmount(value)
    }, !!options?.triggerOnChange ? this.onChange : undefined);
  }
}
