import React from 'react';
import Login from './views/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
	console.log(props)
	return (
		<BrowserRouter>
			<div className="App">
				<Login />
			</div>
		</BrowserRouter>
	);
}


const mapStateToProps = state =>{
	return {
		user: state.auth.user
	};
}

export default connect(mapStateToProps)(App);