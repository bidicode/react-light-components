import BaseComponent, { BaseProps } from './BaseComponent';

export interface BaseButtonProps extends BaseProps {
  name?: string;
  type?: 'submit' | 'reset' | 'button';
  tabIndex?: number;
  disabled?: boolean;
  accessKey?: string;
  autoFocus?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
}

abstract class BaseButtonComponent<P extends BaseButtonProps, S> extends BaseComponent<P, S> {
  constructor(props) {
    super(props);
    this.getType = this.getType.bind(this);
  }

  public getType() {
    return this.getDefault(this.props.type, 'button');
  }
}

export default BaseButtonComponent;
