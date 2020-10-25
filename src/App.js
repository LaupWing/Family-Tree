import React from 'react';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App({initialLoad, user}) {
	let routes = (
		<Switch>
			<Route path='/' component={Login}/>
		</Switch>
	)
	if(user){
		routes = (
			<Switch>
				<Route path='/' component={Home}/>
			</Switch>
		)
	}
	return (
		initialLoad && (<BrowserRouter>
         {!user && <Redirect to="/"/>}
			<div className="App">
				{routes}
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