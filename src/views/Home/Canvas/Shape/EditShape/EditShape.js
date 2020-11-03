import React, {useState, useEffect, memo} from 'react';
import styles from './EditShape.module.css';

const EditShape = ({
      offset, 
      editing,
      setEditShape,
      start,
      setStart,
      moving,
      setMoving,
      canvasRef
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const [startPoint, setStartPoint] = useState(false);
   
   useEffect(() => {
      if(moving){
         const updateLeft = moving.left-startPoint.left;
         const updateTop = moving.top-startPoint.top;

         setEditShape({
            ...editing,
            x:  start.left + updateLeft,
            y: start.top + updateTop
         });
      }
   }, [moving])

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