import React from 'react';
import Login from './views/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { userWatcher } from './store/actions';
import { connect } from 'react-redux';

function App(props) {
	console.log(props.user);
	props.onUserWatch();
	return (
		<BrowserRouter>
			<div className="App">
				<Login />
			</div>
		</BrowserRouter>
	);
}

const mapDispatchToProps = dispatch =>{
	return {
		onUserWatch: () => dispatch(userWatcher())
	};
}

const mapStateToProps = state =>{
	return {
		user: state.user
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);