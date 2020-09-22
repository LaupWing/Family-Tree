import React from 'react';
import styles from './Text.module.css';

const Text = (props) => {
	return (
		<input
			className={styles.input}
			type="text"
			placeholder={props.placeholder}
		/>
	);
};

export default Text;
