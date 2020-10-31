import React from 'react';
import styles from './Shape.module.css';

const Shape = ({active, moving, start, canvasRef}) => {
   const {left} = canvasRef.current.getBoundingClientRect();

   return (
      <div 
         className={styles.shape}
         style={{
            'left': `${start.left-left}px`,
            'top': `${start.top}px`,
            'width': `${(moving-left)-(start.left-left)}px`,
            'height': `${(moving-left)-(start.left-left)}px`
         }}
      >
         
      </div>
   );
}

export default Shape;