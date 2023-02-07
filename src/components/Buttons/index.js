import React from 'react';
import styles from './Button.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
const Button = ({ children }) => {
    return <button className={cx("add-btn")}>{children}</button>;
};

export default Button;
