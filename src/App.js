import React from 'react';
import Login from './views/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App({initialLoad, user}) {
	return (
		initialLoad && (<BrowserRouter>
			<div className="App">
				<Login user={user} />
			</div>
		</BrowserRouter>)
	);
}


const mapStateToProps = state =>{
	return {
		user: state.auth.user,
		initialLoad: state.auth.initialLoad
	};
}

export default connect(mapStateToProps)(App);