import React from 'react';
import Logo from '../components/Logo/LoginLogo';
import styles from './Login.module.css';
import TextInput from '../components/UI/Inputs/Text/Text';
import Button from '../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
const google = require('../assets/images/google.png');
const facebook = require('../assets/images/facebook.png');

const Login = () => {
	const loginPopup = () => {
		firebase
			.auth()
			.signInWithPopup(new firebase.auth.FacebookAuthProvider())
			.then(function (result) {
				console.log(result);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form className={styles.container}>
			<Logo />
			<h2>Login</h2>
			<TextInput placeholder="Email" />
			<TextInput type="password" placeholder="Password" />
			<Link to="/">
				<i>Forgot my password</i>
			</Link>
			<Button type="submit" content="Login" />
			<p>or login with</p>
			<div className={styles.buttons}>
				<button onClick={loginPopup} type="button">
					<img alt="facebook" src={facebook} />
				</button>
				<button type="button">
					<img alt="google" src={google} />
				</button>
			</div>
		</form>
	);
};

export default Login;
