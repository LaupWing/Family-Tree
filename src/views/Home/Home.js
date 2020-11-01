import React, {useState, useRef} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options';
import Canvas from './Canvas/Canvas';

const Home = ()=>{
   const [active, setActive] = useState('Rect');
   const [snapshots, setSnapshots] = useState([]);
   const [shapes, setShapes] = useState([]);
   const homeContainer = useRef(null);

	return (
      <div 
         className={styles.home}
         ref={homeContainer}
      >
         <Options 
            active={active}
            setActive={setActive}
            shapes={shapes}
            snapshots={snapshots}
         />
         <Canvas
            active={active}
            shapes={shapes}
            homeContainer={homeContainer}
            snapshots={snapshots}
            setShapes={setShapes}
            setSnapshots={setSnapshots}
         />
      </div>
   );
}

export default Home;