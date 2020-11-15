import React from 'react';

export interface BaseProps {
    id?: string;
    className?: string;
    onClick?: () => void;
    children?: any;
    ref?: React.RefObject<any>;
}

abstract class BaseComponent<P extends BaseProps, S> extends React.Component<P, S> {
  constructor(props) {
    super(props);
    this.getCustomClassName = this.getCustomClassName.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.getDefault = this.getDefault.bind(this);
  }

  public getCustomClassName(current: string = '', custom?: string): string {
    const clasName = current.trim();
    if (custom) {
      return `${clasName} ${custom}`.trim();
    }
    return clasName;
  }

  public getClassName(current: string): string {
    return this.getCustomClassName(current, this.props.className);
  }

  public getDefault<T>(prop: T, defaultValue: T): T  {
    return typeof prop !== 'undefined' ? prop : defaultValue;
  }
}

export default BaseComponent;
