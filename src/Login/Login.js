import React from 'react';
import Logo from '../components/Logo/LoginLogo';
import styles from './Login.module.css';
import TextInput from '../components/UI/Inputs/Text/Text'

const Login = () =>{
    return (
        <form className={styles.container}>
            <Logo/>
            <h2>Login</h2>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
        </form>
    );
}

export default Login;