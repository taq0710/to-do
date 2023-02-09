import React from 'react';
import './style.scss';

function Button({ leftIcon, rightIcon, children, addBtn, moreBtn, nonBorder, submit, onClick, moreTask }) {
    const classes = [
        'button',
        addBtn && 'add-btn',
        moreBtn && 'more-btn',
        nonBorder && 'non-border',
        submit && 'submit',
        onClick,
        moreTask && 'more-task'
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button onClick={onClick} className={classes}>
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </button>
    );
}

export default Button;
