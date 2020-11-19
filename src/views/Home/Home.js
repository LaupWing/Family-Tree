import React, {useState, useRef} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options';
import Canvas from './Canvas/Canvas';
import Info from './Info/Info';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

const Home = ({
      snapshots, 
      snapshot,
      setSnapshot,
      setSnapshots,
   })=>{
   const [active, setActive] = useState('Rect');
   const [editShape, setEditShape] = useState(false);
   const homeContainer = useRef(null);
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);

	return (
      <div 
         className={styles.home}
         ref={homeContainer}
      >
         <Options 
            active={active}
            setActive={setActive}
            setEditShape={setEditShape}
            start={start}
            moving={moving}
            snapshot={snapshot} 
            snapshots={snapshots}
            setSnapshot={setSnapshot}
            editShape={editShape}
         />
         <Info
            editShape={editShape}
            setSnapshot={setSnapshot}
            snapshot={snapshot}
         />
         <Canvas
            active={active}
            homeContainer={homeContainer}
            editShape={editShape}
            setEditShape={setEditShape}
            snapshots={snapshots}
            snapshot={snapshot}
            setSnapshot={setSnapshot}
            setSnapshots={setSnapshots}
            start={start}
            setStart={setStart}
            moving={moving}
            setMoving={setMoving}
         />
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
      setSnapshots: (snapshots) => dispatch({
         type:actionTypes.SET_SNAPSHOTS,
         snapshots
      }),
      setSnapshot: (snapshot) => dispatch({
         type:actionTypes.SET_SNAPSHOT, 
         snapshot
      })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);