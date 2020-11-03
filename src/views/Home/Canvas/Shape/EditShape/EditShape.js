import React, {useState, useEffect, memo} from 'react';
import styles from './EditShape.module.css';

const EditShape = ({
      offset, 
      editing,
      setEditShape,
      start,
      setStart,
      canvasRef
   }) => {
   const [moving, setMoving] = useState(false);
   const {left} = canvasRef.current.getBoundingClientRect();
   const {top:startTop, left:startLeft} = start;
   
   useEffect(() => {
      if(moving){
         const updateLeft = moving.left-start.left;
         const updateTop = moving.top-start.top;

         setEditShape({
            ...editing,
            x:  startLeft + updateLeft,
            y: startTop + updateTop
         });
         console.log({updateLeft, updateTop, startTop, startLeft})
         // console.log(moving)
         // console.log(editing);
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
                  left: e.clientX,
                  top: e.clientY
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