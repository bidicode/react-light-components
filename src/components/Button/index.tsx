import React from 'react';
import BaseButtonComponent, { BaseButtonProps } from '../../standard/BaseButtonComponent';

interface Props extends BaseButtonProps {
  variant?: 'primary' | 'secondary';
  isCompact?: boolean;
}

export default class Button extends BaseButtonComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public getVariants = (prefix: string) => {
    if (this.props.variant) {
      return `${prefix} ${prefix}-${this.props.variant}`;
    }
    return `${prefix}`;
  }

  public getClassNames = (prefix: string) => {
    const classNames = this.getVariants(prefix);
    if (this.props.isCompact) {
      return this.getCustomClassName(`${classNames} rlight-btn-compact`, this.props.className);
    }
    return this.getCustomClassName(classNames, this.props.className);
  }

  public render() {
    return (
      <button
        id={this.props.id}
        type={this.getType()}
        className={this.getClassNames('rlight-btn-body')}
        name={this.props.name}
        tabIndex={this.props.tabIndex}
        disabled={this.props.disabled}
        accessKey={this.props.accessKey}
        autoFocus={this.props.autoFocus}
        form={this.props.form}
        formAction={this.props.formAction}
        formEncType={this.props.formEncType}
        formMethod={this.props.formMethod}
        formNoValidate={this.props.formNoValidate}
        formTarget={this.props.formTarget}
        onClick={this.props.onClick}
        ref={this.props.ref}
      >
        <span
          className={this.getClassNames('rlight-btn-children-wrapper')}
        >
          <span
            className={this.getClassNames('rlight-btn-children-body')}
          >
            {this.props.children}
          </span>
        </span>
      </button>
    );
  }
}
