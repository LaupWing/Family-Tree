import * as actionTypes from '../actions/actionTypes';

const initialState ={
	name: null,
	avatar: null,
	photos: []
}

const setUser = (state, user)=>{
	return {
		...state,
		name: user.name,
		avatar: user.url
	}
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.SET_USER: return setUser(state, action);
		default:
			return state;
	}
}

export default reducer;