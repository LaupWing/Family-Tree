import React, {useEffect, useState} from 'react';
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
   const [activeShape, setActiveShape] = useState(null);
   const offset = 10;

   useEffect(()=>{
      const shape = new allShapes[active](
         ctx, 
         start.left-left,
         start.top,
         ((moving-left)-(start.left-left))
      );
      setShapes([...shapes, 
         shape  
      ]);
      setActiveShape(shape);
   },[]);

   useEffect(()=>{
      if(activeShape){
         const updated = shapes.map(x=>{
            if(x===activeShape){
               x.dimension = ((moving-left)-(start.left-left));
            }
            return x;
         }) ;
         setShapes(updated);
      }
   },[moving]);
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