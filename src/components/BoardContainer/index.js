import React from 'react';
import Board from '../Board';
import'./style.scss';


const listItem = [
    {key: 'back-log', title:'Backlog'},
    {key: 'to-do', title:'To Do'},
    {key: 'in-progress', title:'In Progress'},
    {key: 'done', title:'Done'}
]
const BoardContainer = () => {
    return (
        <div className='board-title-container'>
            {listItem.map(item => (
                <Board key={item.key} typeBoard={item.key} title={item.title} />
            ))}
        </div>
    );
};

export default BoardContainer;
