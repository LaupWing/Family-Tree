import React, {useState, useRef} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options';
import Canvas from './Canvas/Canvas';
import Info from './Info/Info';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

const Home = ({
      shapes, 
      snapshots, 
      snapshot,
      setSnapshot,
      setSnapshots,
      setShapes
   })=>{
   const [active, setActive] = useState('Rect');
   const [editShape, setEditShape] = useState(false);
   const homeContainer = useRef(null);

	return (
      <div 
         className={styles.home}
         ref={homeContainer}
      >
         <Options 
            active={active}
            setActive={setActive}
            setEditShape={setEditShape}
         />
         <Info
            editShape={editShape}
            setSnapshot={setSnapshot}
            snapshot={snapshot}
         />
         <Canvas
            active={active}
            shapes={shapes}
            homeContainer={homeContainer}
            editShape={editShape}
            setEditShape={setEditShape}
            snapshots={snapshots}
            snapshot={snapshot}
            setShapes={setShapes}
            setSnapshot={setSnapshot}
            setSnapshots={setSnapshots}
         />
      </div>
   );
}

const mapStateToProps = state =>{
	return {
		shapes: state.shapes.shapes,
		snapshot: state.shapes.snapshot,
		snapshots: state.shapes.snapshots,
	};
}

const mapDispatchToProps= dispatch =>{
   return {
      setSnapshots: (snapshots) => dispatch({
         type:actionTypes.SET_SNAPSHOTS,
         snapshots
      }),
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);