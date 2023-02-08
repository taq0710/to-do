import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Button({ leftIcon, rightIcon, children, addBtn, moreBtn, nonBorder, submit }) {
    let Comp = 'button';
    const props = {};

    const classes = cx('wrapper', {
        addBtn,
        moreBtn,
        nonBorder,
        submit,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
