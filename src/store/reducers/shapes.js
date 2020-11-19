import * as actionTypes from '../actions/actionTypes';
import allShapes from '../../helpers/shapes';

const initialState ={
	snapshots: [],
	snapshot: [],
}

const setSnapshots = (state)=>{
   const copyShapes = state.snapshot.map(shape=>{
      return new allShapes[shape.constructor.name](
         shape.ctx,
         shape.x,
         shape.y,
         shape.size,
         shape.color,
         shape.width
      );
   });
   const index = state.snapshots.indexOf(state.snapshot);
   if(state.snapshots.length === 0){
      return{
         ...state,
         snapshots:[[], copyShapes]
      }
   }
   if(
      index === -1 ||
      ((index >= 0) && (state.snapshots.length-1 === index))
   ){
      return {
         ...state,
         snapshots: [...state.snapshots,copyShapes]
      }
   }else{
      return {
         ...state,
         snapshots: [...state.snapshots.slice(0, index+1),copyShapes]
      }
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
		case actionTypes.SET_SNAPSHOTS: return setSnapshots(state);
		case actionTypes.SET_SNAPSHOT: return setSnapshot(state, action.snapshot);
		default:
			return state;
	}
}

export default reducer;