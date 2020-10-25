import React from 'react';
import firebase from 'firebase';

const Home = ()=>{
	return (
		<div>
			<h2>Home</h2>
			<button onClick={()=>firebase.auth().signOut()}>Logout</button>
		</div>
	)
}

export default Home;