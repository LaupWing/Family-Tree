import React, {useEffect, useState} from 'react';
import styles from './EditShape.module.css';

const EditShape = ({}) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const offset = 10;
   
   return (
      <div 
         className={styles.shape}
         style={{
            'left': `${(start.left-left)-offset}px`,
            'top': `${start.top-offset}px`,
            'width': `${((moving-left)-(start.left-left))+(offset*2)}px`,
            'height': `${((moving-left)-(start.left-left))+(offset*2)}px`
         }}
      >
         
      </div>
   );
}

export default EditShape;