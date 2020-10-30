import React, {useState} from 'react';
import styles from './Home.module.css';
import Options from './Options/Options'

const Home = ()=>{
   const [active, setActive] = useState('Rect');

	return (
      <div className={styles.home}>
         <Options 
            active={active}
            setActive={setActive}
         />
         <canvas id="canvas" className={styles.canvas}>
            
         </canvas>
      </div>
   );
}

export default Home;