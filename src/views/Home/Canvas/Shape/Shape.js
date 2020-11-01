import React, {useEffect} from 'react';
import styles from './Shape.module.css';

const Shape = ({
      moving, 
      start, 
      canvasRef,
      updateShape,
      newShape
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const offset = 10;

   useEffect(newShape,[]);
   useEffect(updateShape,[moving]);

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

export default Shape;