import React, { useState, useRef, useEffect } from 'react';
import TaskForm from '../TaskForm';
import Button from '../Button';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';


const Board = ({ title, typeBoard,  }) => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [activeTaskIndex, setActiveTaskIndex] = useState(-1);
    const boardRef = useRef(null);
    const formRef = useRef(null);

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowTaskForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        if (showTaskForm) {
            formRef.current.querySelector('input').focus();
        }
    }, [showTaskForm]);
    

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setShowTaskForm(false);
    };
    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    

    const changeTask = (index, newTask) => {
        if (!newTask) return;
    
        const newTasks = [...tasks];
        newTasks[index] = newTask;
        setTasks(newTasks);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        const task = e.dataTransfer.getData('task');
        const index = tasks.indexOf(task);
        if (index !== -1) {
            deleteTask(index);
        }
        addTask(task);
    };
    
    

    return (
        <div className={'board'} ref={boardRef} onDragOver={handleDragOver} onDrop={handleDrop}>
            <p className={typeBoard}>{title} {tasks.length}</p>
            <div className="list">
                {tasks.map((task, index) => (
                    <p
                        key={index}
                        className="list-item"
                        onMouseEnter={() => setActiveTaskIndex(index)}
                        onMouseLeave={() => setActiveTaskIndex(-1)}
                        draggable
                        onDragStart={(e) => e.dataTransfer.setData('task', task)}
                    >
                        {task}
                        {activeTaskIndex === index && (
                            <Tippy
                                interactive
                                placement="bottom"
                                render={(attrs) => (
                                    <div {...attrs}>
                                        <Button onClick={() => deleteTask(index)}>Delete</Button>
                                        <Button onClick={() => changeTask(index, prompt('Enter new task'))}>
                                            Change
                                        </Button>
                                    </div>
                                )}
                            >
                                <button className="task-more-btn">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Tippy>
                        )}
                    </p>
                ))}
            </div>

            {showTaskForm ? (
                <div ref={formRef}>
                    <TaskForm onSubmit={addTask} />
                </div>
            ) : (
                <Button addBtn leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={() => setShowTaskForm(true)}>
                    New
                </Button>
            )}
        </div>
    );
};

export default Board;
