import firebase from 'firebase';
import * as actionTypes from './actionTypes';

export const userWatcher = ()=>{
	return dispatch =>{
		firebase
			.auth()
			.onAuthStateChanged(user=>{
				dispatch({
					type: actionTypes.SET_USER,
					user
				});
			});	
	}
};