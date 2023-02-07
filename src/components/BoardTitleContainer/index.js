import classNames from 'classnames/bind';
import React from 'react';
import TitleBoard from '../TitleBoard';
import styles from './containerboard.module.scss';

const cx = classNames.bind(styles);
const BoardTitleContainer = () => {
    return (
        <div className={cx('board-title-container')}>
            <TitleBoard className={cx('back-log')} title="Backlog" />
            <TitleBoard className="to-do" title="To Do" />
            <TitleBoard className="in-progress" title="In Progress" />
            <TitleBoard className="done" title="Done" />
        </div>
    );
};

export default BoardTitleContainer;
