import React from 'react';
import BaseComponent, { BaseProps } from '../../standard/BaseComponent';

interface Props extends BaseProps {
  col?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
  children?: any;
}

export default class Col extends BaseComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  public getColClassNames = () => {
    let classNames = this.props.className ? this.props.className : '';
    if (this.props.col) {
      classNames += ` col-${this.props.col}`;
    }
    if (this.props.xs) {
      classNames += ` col-xs-${this.props.xs}`;
    }
    if (this.props.sm) {
      classNames += ` col-sm-${this.props.sm}`;
    }
    if (this.props.md) {
      classNames += ` col-md-${this.props.md}`;
    }
    if (this.props.lg) {
      classNames += ` col-lg-${this.props.lg}`;
    }
    if (this.props.xl) {
      classNames += `col-xl-${this.props.xl} `;
    }
    classNames = classNames.trim();
    if (!classNames) {
      classNames = 'col';
    }
    return classNames;
  }

  public render() {
    return (
      <div
        id={this.props.id}
        className={this.getClassName(this.getColClassNames())}
        onClick={this.props.onClick}
        ref={this.props.ref}
      >
        {this.props.children}
      </div>
    );
  }

}
