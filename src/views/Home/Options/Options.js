import React from 'react';
import icons from '../../../components/Icons';
import styles from './Options.module.css';

const Options = ({active, setActive}) => {
   const options = [
      'Rect',
      'Circle',
      'Multi'
   ];

   return (
      <div className={styles.options}>
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
