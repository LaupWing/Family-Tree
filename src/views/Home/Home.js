import React, {useState} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options';
import Canvas from './Canvas/Canvas';

const Home = ()=>{
   const [active, setActive] = useState('Rect');

	return (
      <div className={styles.home}>
         <Options 
            active={active}
            setActive={setActive}
         />
         <Canvas
            active={active}
         />
      </div>
   );
}

export default Home;