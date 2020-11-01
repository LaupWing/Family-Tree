import React, {useState, useRef} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options';
import Canvas from './Canvas/Canvas';

const Home = ()=>{
   const [active, setActive] = useState('Rect');
   const [allSnapshots, setAllSnapshots] = useState([]);
   const [snapshot, setSnapshot] = useState([]);
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
            allSnapshots={allSnapshots}
            setAllSnapshots={setAllSnapshots}
         />
         <Canvas
            setSnapshot={setSnapshot}
            active={active}
            homeContainer={homeContainer}
         />
      </div>
   );
}

export default Home;