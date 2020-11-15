import * as actionTypes from '../actions/actionTypes';

const initialState ={
	shapes: [],
	snapshots: [],
	snapshot: [],
}

const setUser = (state, shapes)=>{
	return {
      ...state,
      shapes
	}
}
const setSnapshots = (state, snapshots)=>{
	return {
      ...state,
      snapshots
	}
}
const setSnapshot = (state, snapshot)=>{
	return {
      ...state,
      snapshot
	}
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.SET_SHAPES: return setUser(state, action.shapes);
		case actionTypes.SET_SNAPSHOTS: return setSnapshots(state, action.snapshots);
		case actionTypes.SET_SNAPSHOT: return setSnapshot(state, action.snapshot);
		default:
			return state;
	}
}

export default reducer;