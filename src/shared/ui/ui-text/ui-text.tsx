import clsx from 'clsx';
import { AllHTMLAttributes } from 'react';
import styles from './ui-text.module.scss';

export interface TextProps extends AllHTMLAttributes<HTMLSpanElement>{
    weight: 'regular' | 'medium'
    error?: boolean;
}

export const UiText = ({
    children,
    weight = 'regular',
    error,
    className,
    ...restProps
}: TextProps) => {
    const classes = clsx(
        styles.text,
        styles[weight],
        error && styles.error,
        className
    );

    return (
        <span {...restProps} className={classes}>
            {children}
        </span>
    );
};
