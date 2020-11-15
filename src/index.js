import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './firebase';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import authStore from './store/reducers/auth';
import shapesStore from './store/reducers/shapes';
import thunk from 'redux-thunk';
import { userWatcher } from './store/actions';
import { BrowserRouter } from 'react-router-dom';

const rootReducer = combineReducers({
	auth: authStore,
	shapes: shapesStore
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(userWatcher())
ReactDOM.render(
	<Provider store={store}>
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
