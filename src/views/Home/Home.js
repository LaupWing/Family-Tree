import React, {useState, useRef} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options';
import Canvas from './Canvas/Canvas';
import Info from './Info/Info';

const Home = ()=>{
   const [active, setActive] = useState('Rect');
   const [snapshots, setSnapshots] = useState([]);
   const [snapshot, setSnapshot] = useState([]);
   const [shapes, setShapes] = useState([]);
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
            snapshot={snapshot}
            snapshots={snapshots}
            setSnapshot={setSnapshot}
            setShapes={setShapes}
            setEditShape={setEditShape}
         />
         <Info
            editShape={editShape}
            setShapes={setShapes}
            shapes={shapes}
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

export default Home;