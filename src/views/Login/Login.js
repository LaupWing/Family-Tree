import React from 'react';
import Logo from '../../components/Logo/LoginLogo';
import styles from './Login.module.css';
import TextInput from '../../components/UI/Inputs/Text/Text';
import Button from '../../components/UI/Button/Button';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
const google = require('../../assets/images/google.png');
const facebook = require('../../assets/images/facebook.png');

const Login = () => {
	const loginPopup = (e) => {
		const type = e.target.id;
		firebase
			.auth()
			.signInWithPopup(type === 'facebook' 
				? new firebase.auth.FacebookAuthProvider()
				: new firebase.auth.GoogleAuthProvider()
			)
	};
	return (
		<form onSubmit={(e)=>e.preventDefault()} className={styles.container}>
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
				<button id='facebook' onClick={loginPopup} type="button">
					<img alt="facebook" src={facebook} />
				</button>
				<button id='google' onClick={loginPopup} type="button">
					<img alt="google" src={google} />
				</button>
			</div>
		</form>
	);
};

export default Login;
