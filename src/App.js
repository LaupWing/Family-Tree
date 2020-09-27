import React from 'react';
import Login from './Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { userWatcher } from './store/actions';
import { connect } from 'react-redux';

function App(props) {
	props.onUserWatch();
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
