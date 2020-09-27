import * as actionTypes from '../actions/actionTypes';

const initialState ={
	name: null,
	avatar: null,
	photos: [],
	user: null
}

const setUser = (state, user)=>{
	return user ? {
		...state,
		user,
	} : state
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.SET_USER: return setUser(state, action.user);
		default:
			return state;
	}
}

export default reducer;