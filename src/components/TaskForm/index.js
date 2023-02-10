import React, { useState } from 'react';
import Button from '../Button';
import { useRef } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) {
            setError('Please enter a value');
            return;
        }
        setError('');
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {error && <div className="error" >{error}</div>}
            <Button type="submit">ADD</Button>
        </form>
    );
};

export default TaskForm;
