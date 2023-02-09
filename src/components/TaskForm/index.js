import React, { useState } from 'react';
import Button from '../Button';

const TaskForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button type="submit">ADD</Button>
        </form>
    );
};

export default TaskForm;
