import React from 'react';
import firebase from 'firebase';
import {useHistory} from 'react-router-dom';

const Home = ()=>{
   const history = useHistory();
	return (
		<div>
			<h2>Home</h2>
			<button onClick={()=>{
            firebase.auth().signOut();
            history.push('/auth');
         }}>Logout</button>
		</div>
	)
}

export default Home;