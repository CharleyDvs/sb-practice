import React from 'react';
import classes from './IconButton.module.scss';
import { CheckCircle, ArrowLeftRounded, ArrowRightRounded } from '@material-ui/icons';

type ButtonType = 'light' | 'primary' | 'secondary' | 'dark' | 'disabled';

const icons = {
    None: null,
    CheckCircle,
    ArrowLeftRounded,
    ArrowRightRounded
};

export interface ButtonProps {
    text?: string;
    className?: string;
    type?: ButtonType;
    onClick?: () => void;
    leftIcon?: keyof typeof icons;
    rightIcon?: keyof typeof icons;
}

const defaultIconStyle = {
    width: 24,
    height: 24
};

export function Button({
    text = '',
    type = 'light',
    className,
    leftIcon = 'None',
    rightIcon = 'None',
    ...rest
}: ButtonProps): JSX.Element {
    const classNames = [classes['custom-button'], classes[type]].join(' ') + ' ' + (className ?? '');
    const isDisabled = type === 'disabled';

    const LeftFixedIcon = leftIcon ? icons[leftIcon] : null;
    const RightFixedIcon = rightIcon ? icons[rightIcon] : null;

    return (
        <button disabled={isDisabled} className={classNames} {...rest}>
            <div className={classes['spaced-icons']}>
                {LeftFixedIcon && <LeftFixedIcon style={defaultIconStyle} />}
            </div>
            <div className={classes['button-text']}>{text}</div>
            <div className={classes['spaced-icons']}>
                {RightFixedIcon && <RightFixedIcon style={defaultIconStyle} />}
            </div>
        </button>
    );
}
