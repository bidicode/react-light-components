import BaseComponent, { BaseProps } from './BaseComponent';

export interface BaseLabelProps extends BaseProps {
    for?: string;
    value?: string;
}

abstract class BaseLabelComponent<P extends BaseLabelProps, S> extends BaseComponent<P, S> {}

export default BaseLabelComponent;
