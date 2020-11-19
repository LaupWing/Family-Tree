import React from 'react';
import icons from '../../../components/Icons';
import styles from './Options.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

const Options = ({
      active, 
      setActive, 
      snapshot, 
      snapshots,
      setSnapshot,
      setShapes,
      setEditShape
   }) => {
   const options = [
      'Rect',
      'Circle',
      'Hex'
   ];
   const Forward = icons['Forward'];
   const backward = ()=>{
      const index = snapshots.indexOf(snapshot);
      setEditShape(false);
      if(index!==0){
         setSnapshot(snapshots[index-1]);
         setShapes(snapshots[index-1]);
      }
   }
   const forward = ()=>{
      const index = snapshots.indexOf(snapshot);
      setEditShape(false);
      if((index+1) < (snapshots.length)){
         setSnapshot(snapshots[index+1]);
         setShapes(snapshots[index+1]);
      }
   }

   return (
      <div className={styles.options}>
         <div className={styles.snapshot}>
            <Forward 
               reverse={true}
               extraClassname={
                  (snapshots.length === 0 ||
                  snapshots[0] === snapshot ) ? 
                  styles.disabled :
                  false
               }
               handleClick={backward}
            />
            <Forward
               extraClassname={
                  (snapshots.length === 0 || snapshots[snapshots.length-1] === snapshot) ? 
                  styles.disabled :
                  false
               }
               handleClick={forward}
            />
         </div>
         {options.map(x=>{
            const Cmp = icons[x];
            return (
               <div 
                  className={`${styles.option} ${active === x ? styles.active : ''}`}
                  onClick={()=>{
                     setActive(x);
                     setEditShape(false);
                  }}
                  key={x}
               >
                  <Cmp/>
               </div>
            );
         })}
      </div>
   );
}

const mapStateToProps = state =>{
	return {
		snapshot: state.shapes.snapshot,
		snapshots: state.shapes.snapshots,
	};
}

const mapDispatchToProps= dispatch =>{
   return {
      setSnapshot: (snapshot) => dispatch({
         type:actionTypes.SET_SNAPSHOT, 
         snapshot
      }),
      setShapes: (shapes) => dispatch({
         type:actionTypes.SET_SHAPES, 
         shapes
      })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
