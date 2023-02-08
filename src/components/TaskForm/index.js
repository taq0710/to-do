import React from 'react';
import Button from '../Buttons';
import Input from '../Input';
import classNames from 'classnames/bind';
import styles from './TaskForm.module.scss'
const cx = classNames.bind(styles)

const TaskForm = () => {
    return (
        <form className={cx('wrapper')}>
            <Input />
            <Button submit>ADD</Button>
        </form>
    );
};

export default TaskForm;
