import React from 'react';
import Login from './Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { userWatcher } from './store/actions';
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

const mapDispatchToProps = (dispatch)=>{
	return {
		onUserWatch: () => dispatch(userWatcher())
	};
}

export default connect(null, mapDispatchToProps)(App);
