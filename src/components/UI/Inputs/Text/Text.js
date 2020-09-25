import React from 'react';
import styles from './Text.module.css';

const Text = ({ placeholder, type = 'text' }) => {
	return (
		<input className={styles.input} type={type} placeholder={placeholder} />
	);
};

export default Text;
