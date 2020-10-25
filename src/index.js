import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './firebase';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import authStore from './store/reducers/auth';
import thunk from 'redux-thunk';
import { userWatcher } from './store/actions';

const rootReducer = combineReducers({
	auth: authStore
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(userWatcher())
ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
