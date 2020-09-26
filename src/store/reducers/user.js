import * as actionTypes from '../actions/actionTypes'

const initialState ={
	name: null,
	avatar: null,
	photos: []
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.SET_USER: return 'addIngredient(state, action)';
		default:
			return state;
	}
}

export default reducer;