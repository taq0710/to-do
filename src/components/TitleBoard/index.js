import React from 'react';
import TaskForm from '../TaskForm';
import Button from '../Buttons';
import classNames from 'classnames/bind';
import styles from './TitleBoard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const TitleBoard = ({ title, className }) => {
    return (
        <div className={cx('title-board', className)}>
            <p className={className}>{title}</p>
            <TaskForm />
            <Button addBtn leftIcon={<FontAwesomeIcon icon={faPlus}/>}>New</Button>
            
        </div>
    );
};

export default TitleBoard;
