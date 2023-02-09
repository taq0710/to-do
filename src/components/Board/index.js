import React, { useState } from 'react';
import TaskForm from '../TaskForm';
import Button from '../Button';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

const Board = ({ title, typeBoard }) => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [showMoreTask, setShowMoreTask] = useState(false);

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setShowTaskForm(false);
    };
    return (
        <div className={'board'}>
            <p className={typeBoard}>{title}</p>
            <div className="list">
                {tasks.map((task, index) => (
                    <p
                        key={index}
                        className="list-item"
                        onMouseEnter={() => setShowMoreTask(true)}
                        onMouseLeave={() => setShowMoreTask(false)}
                    >
                        {task}
                        {showMoreTask && (
                            <Tippy>
                                <Button moreTask rightIcon={<FontAwesomeIcon icon={faEllipsisVertical} />}></Button>
                            </Tippy>
                        )}
                    </p>
                ))}
            </div>

            {showTaskForm ? (
                <TaskForm onSubmit={addTask} />
            ) : (
                <Button addBtn leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={() => setShowTaskForm(true)}>
                    New
                </Button>
            )}
        </div>
    );
};

export default Board;
