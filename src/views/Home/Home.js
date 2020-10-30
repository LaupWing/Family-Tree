import React from 'react';
import styles from './Home.module.css';
import Options from './Options/Options'

const Home = ()=>{
	return (
      <div className={styles.home}>
         <Options/>
         <canvas id="canvas" className={styles.canvas}>
            
         </canvas>
      </div>
   );
}

export default Home;