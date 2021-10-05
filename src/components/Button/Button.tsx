import React from 'react';
import classes from './Button.module.scss';

type ButtonType = 'light' | 'primary' | 'secondary' | 'dark' | 'disabled';

export interface ButtonProps {
    text?: string;
    className?: string;
    type?: ButtonType;
    onClick?: () => void;
}

export function Button({ text = '', type = 'light', className, ...rest }: ButtonProps): JSX.Element {
    const classNames = [classes['custom-button'], classes[type]].join(' ') + ' ' + (className ?? '');
    const isDisabled = type === 'disabled';

    return (
        <button disabled={isDisabled} className={classNames} {...rest}>
            {text}
        </button>
    );
}
