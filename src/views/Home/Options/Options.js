import React from 'react';
import icons from '../../../components/Icons';
import styles from './Options.module.css';

const Options = ({
      active, 
      setActive, 
      shapes, 
      snapshots
   }) => {
   const options = [
      'Rect',
      'Circle',
      'Multi'
   ];
   const Forward = icons['Forward'];

   return (
      <div className={styles.options}>
         <div className={styles.snapshot}>
            <Forward 
               reverse={true}
               extraClassname={
                  (snapshots.length === 0 ||
                  snapshots[0] === shapes ) ? 
                  styles.disabled :
                  false
               }
            />
            <Forward
               extraClassname={
                  snapshots[snapshots.length-1] === shapes ? 
                  styles.disabled :
                  false
               }
            />
         </div>
         {options.map(x=>{
            const Cmp = icons[x];
            return (
               <div 
                  className={`${styles.option} ${active === x ? styles.active : ''}`}
                  onClick={()=>setActive(x)}
                  key={x}
               >
                  <Cmp/>
               </div>
            );
         })}
      </div>
   );
}

export default Options;
