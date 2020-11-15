import BaseInputComponent, { BaseInputProps } from './BaseInputComponent';

export interface BaseCheckboxProps extends BaseInputProps {
    checked?: boolean;
}

abstract class BaseCheckboxComponent<P extends BaseInputProps, S> extends BaseInputComponent<P, S> {}

export default BaseCheckboxComponent;
