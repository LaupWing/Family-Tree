import * as actionTypes from '../actions/actionTypes';

const initialState ={
	name: null,
	avatar: null,
	photos: [],
	user: null,
	initialLoad: false
}

const setUser = (state, user)=>{
   console.log(user);
	return user ? {
		...state,
		user,
		initialLoad: true
	} : {
      ...state,
      user,
		initialLoad: true
	}
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.SET_USER: return setUser(state, action.user);
		default:
			return state;
	}
}

export default reducer;