import classNames from 'classnames/bind';
import React from 'react';
import TitleBoard from '../TitleBoard';
import styles from './containerboard.module.scss';

const cx = classNames.bind(styles);
const listItem = [
    {className: 'back-log', title:'Backlog'},
    {className: 'to-do', title:'To Do'},
    {className: 'in-progress', title:'In Progress'},
    {className: 'done', title:'Done'}
]
const BoardTitleContainer = () => {
    return (
        <div className={cx('board-title-container')}>
            {listItem.map(item => (
                <TitleBoard className={item.className} title={item.title} />
            ))}
        </div>
    );
};

export default BoardTitleContainer;
