import React from 'react';
import Logo from '../components/Logo/LoginLogo';
import styles from './Login.module.css';
import TextInput from '../components/UI/Inputs/Text/Text';
import Button from '../components/UI/Button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<form className={styles.container}>
			<Logo />
			<h2>Login</h2>
			<TextInput placeholder="Email" />
			<TextInput placeholder="Password" />
			<Link to="/">
				<i>Forgot my password</i>
			</Link>
			<Button content="Login" />
		</form>
	);
};

export default Login;
