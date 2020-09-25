import React from 'react';
import styles from './Button.module.css';

const Button = ({ cls, content, styling, type = 'button' }) => {
	return (
		<button
			style={{ ...styling }}
			className={`${styles.button} ${styles[cls]}`}
			type={type}
		>
			{content}
		</button>
	);
};

export default Button;
