import React, {useState, useEffect, memo} from 'react';
import styles from './EditShape.module.css';

const EditShape = ({
      offset, 
      editing,
      start,
      setStart,
      moving,
      setMoving,
      canvasRef,
      shapes,
      setShapes
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const [startPoint, setStartPoint] = useState(false);
   const update = ()=>{
      if(moving){
         const updateLeft = moving.left-startPoint.left;
         const updateTop = moving.top-startPoint.top;
         const updated = shapes.map(x=>{
            if(x===editing){
               x.x = start.left + updateLeft - offset;
               x.y = start.top + updateTop - offset;
            }
            return x;
         });
         setShapes(updated);
      }
   }

   useEffect(update, [moving])

   return (
      <div 
         className={styles.shape}
         style={{
            'left': `${(editing.x)-offset}px`,
            'top': `${editing.y-offset}px`,
            'width': `${editing.dimension+(offset*2)}px`,
            'height': `${editing.dimension+(offset*2)}px`
         }}
         onMouseDown={(e)=>{
            if(!start){
               e.persist();
               setStart({
                  left: (editing.x)-offset,
                  top: editing.y-offset
               });
               setStartPoint({
                  left: e.clientX - left - offset,
                  top: e.clientY - offset
               });
            }
         }}
         onMouseUp={()=>{
            setStart(false);
            setMoving(false);
         }}
         onMouseMove={(e)=>{
            if(start){
               setMoving({
                  left: e.clientX - left,
                  top: e.clientY
               });
            }
         }}
      >
         
      </div>
   );
}

export default memo(EditShape);