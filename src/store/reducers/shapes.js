import * as actionTypes from '../actions/actionTypes';

const initialState ={
	shapes: [],
	snapshots: [],
}

const setUser = (state, shapes)=>{
	return {
      ...state,
      shapes
	}
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.SET_SHAPES: return setUser(state, action.shapes);
		default:
			return state;
	}
}

export default reducer;