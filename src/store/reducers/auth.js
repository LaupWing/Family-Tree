import * as actionTypes from '../actions/actionTypes';

const initialState ={
	name: null,
	avatar: null,
	photos: []
}

const setUser = (state, user)=>{
	return user ? {
		...state,
		name: user.name,
		avatar: user.url
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