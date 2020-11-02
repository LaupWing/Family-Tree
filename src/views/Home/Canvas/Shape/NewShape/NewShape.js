import React, {useEffect, useState} from 'react';
import styles from './NewShape.module.css';
import allShapes from '../shapes';

const NewShape = ({
      active, 
      moving, 
      start, 
      canvasRef,
      setShapes,
      shapes,
      ctx,
      offset
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const [activeShape, setActiveShape] = useState(null);
   
   const init = ()=>{
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
   }
   const updateShape =  ()=>{
      if(activeShape){
         const updated = shapes.map(x=>{
            if(x===activeShape){
               x.dimension = ((moving-left)-(start.left-left));
            }
            return x;
         }) ;
         setShapes(updated);
      }
   }

   useEffect(init,[]);
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

export default NewShape;