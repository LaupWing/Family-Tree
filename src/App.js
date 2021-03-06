import React from 'react';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './components/Nav/Nav';

function App({initialLoad, user}) {
	let routes = (
		<Switch>
			<Route path='/auth' component={Login}/>
		</Switch>
	)
	if(user){
		routes = (
			<Switch>
				<Route path='/auth' component={Login}/>
				<Route path='/' component={Home} exact/>
			</Switch>
		)
	}
	return (
		initialLoad && 
      <div className="App">
         {user && <Nav/>}
         {!user ? <Redirect to="/auth"/> : <Redirect to="/"/>}
         {routes}
      </div>
	);
}


const mapStateToProps = state =>{
	return {
		user: state.auth.user,
		initialLoad: state.auth.initialLoad
	};
}

export default connect(mapStateToProps)(App);