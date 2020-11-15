import BaseComponent, { BaseProps } from './BaseComponent';

export interface BaseInputProps extends BaseProps {
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  tabIndex?: number;
  placeholder?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
}

abstract class BaseInputComponent<P extends BaseInputProps, S> extends BaseComponent<P, S> {
  constructor(props) {
    super(props);
    this.getType = this.getType.bind(this);
  }

  public getType() {
    return this.getDefault(this.props.type, 'text');
  }
}

export default BaseInputComponent;
