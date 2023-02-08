import classNames from 'classnames/bind';
import React from 'react';
import TitleBoard from '../TitleBoard';
import styles from './containerboard.module.scss';

const cx = classNames.bind(styles);
const BoardTitleContainer = () => {
    return (
        <div className={cx('board-title-container')}>
            <TitleBoard  title="Backlog" />
            <TitleBoard  title="To Do" />
            <TitleBoard  title="In Progress" />
            <TitleBoard  title="Done" />
        </div>
    );
};

export default BoardTitleContainer;
