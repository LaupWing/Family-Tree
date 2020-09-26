const initialState ={
	name: null,
	avatar: null,
	photos: []
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case 'actionTypes.ADD_INGREDIENT': return 'addIngredient(state, action)';
		default:
			return state;
	}
}

export default reducer;