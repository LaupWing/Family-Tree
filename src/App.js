import React from 'react';
import Login from './Login/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Login />
			</div>
		</BrowserRouter>
	);
}

export default App;
