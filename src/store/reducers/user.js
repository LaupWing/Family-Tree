const initialState ={
	ingredients: null,
	totalPrice: 4,
	error: false,
	building: false
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case 'actionTypes.ADD_INGREDIENT': return 'addIngredient(state, action)'
		default:
			return state
	}
}

export default reducer