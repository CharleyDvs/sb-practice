import React from 'react';
import classes from './Button.module.scss';

type ButtonType = 'light' | 'primary' | 'secondary' | 'dark' | 'disabled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    text?: string;
    type?: ButtonType;
}

export function Button({ text = '', type = 'light', ...rest }: ButtonProps): JSX.Element {
    const classNames = [classes['custom-button'], classes[type]].join(' ');
    const isDisabled = type === 'disabled';

    return (
        <button disabled={isDisabled} className={classNames} {...rest}>
            {text}
        </button>
    );
}
