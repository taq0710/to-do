import React from 'react';
import TaskForm from '../TaskForm';
import Button from '../Buttons';
import classNames from 'classnames/bind';
import styles from './TitleBoard.module.scss';

const cx = classNames.bind(styles);
const TitleBoard = ({ title }) => {
    return (
        <div className={cx('title-board')}>
            <p className={`${title.toLowerCase()} size`}>{title}</p>
            <Button> + New</Button>
            <TaskForm />
        </div>
    );
};

export default TitleBoard;
