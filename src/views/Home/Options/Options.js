import React from 'react';
import icons from '../../../components/Icons';
import styles from './Options.module.css';

const Options = ({
      active, 
      setActive, 
      snapshot, 
      snapshots,
      setSnapshot,
      setShapes
   }) => {
   const options = [
      'Rect',
      'Circle',
      'Multi'
   ];
   const Forward = icons['Forward'];
   const backward = ()=>{
      const index = snapshots.indexOf(snapshot);
      if(index!==0){
         setSnapshot(snapshots[index-1]);
         setShapes(snapshots[index-1]);
      }
   }
   const forward = ()=>{
      const index = snapshots.indexOf(snapshot);
      if((index+1) < (snapshots.length)){
         setSnapshot(snapshots[index+1]);
         setShapes(snapshots[index+1]);
      }
   }

   return (
      <div className={styles.options}>
         <div className={styles.snapshot}>
            <Forward 
               reverse={true}
               extraClassname={
                  (snapshots.length === 0 ||
                  snapshots[0] === snapshot ) ? 
                  styles.disabled :
                  false
               }
               handleClick={backward}
            />
            <Forward
               extraClassname={
                  snapshots[snapshots.length-1] === snapshot ? 
                  styles.disabled :
                  false
               }
               handleClick={forward}
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
