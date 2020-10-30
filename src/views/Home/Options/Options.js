import React from 'react';
import icons from '../../../components/Icons';
import styles from './Options.module.css';

const Options = () => {
   const Rect = icons['Rect'];
   const Circle = icons['Circle'];
   const Multi = icons['Multi'];

   return (
      <div className={styles.options}>
         <Rect/>
         <Circle/>
         <Multi/>
      </div>
   );
}

export default Options;
