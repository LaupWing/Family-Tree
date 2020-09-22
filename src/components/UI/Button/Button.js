import React from 'react';
import styles from './Button.module.css'

const Button = ({cls, content, styling}) => {
    return (
        <button 
            style={{...styling}} 
            className={`${styles.button} ${styles[cls]}`}
        >
            {content}
        </button>
    );
}

export default Button;
