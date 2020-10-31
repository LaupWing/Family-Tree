import React, {useEffect} from 'react';
import styles from './Shape.module.css';
import allShapes from './shapes';

const Shape = ({
      active, 
      moving, 
      start, 
      canvasRef,
      setShapes,
      shapes,
      ctx
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();

   useEffect(()=>{
      setShapes([...shapes, 
         new allShapes[active](
            ctx, 
            start.left-left,
            start.top,
            ((moving-left)-(start.left-left))
         )
      ]);
   },[]);
   useEffect(()=>{
      console.log(shapes)
   },[moving]);

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