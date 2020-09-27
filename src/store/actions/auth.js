import firebase from 'firebase';
import * as actionTypes from './actionTypes';

const setUser = (user)=>{
	console.log(user)
	return {
		type: actionTypes.SET_USER,
		user
	}
}

export const userWatcher = ()=>{
	return dispatch =>{
		firebase
			.auth()
			.onAuthStateChanged(user=>{
				dispatch(setUser(user));
			});	
	}
};