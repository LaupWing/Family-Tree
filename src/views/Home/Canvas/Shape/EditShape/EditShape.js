import React, {useState, useEffect, memo} from 'react';
import styles from './EditShape.module.css';

const EditShape = ({
      offset, 
      editing,
      setEditShape
   }) => {
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);
   const {x, y} = editing;
   
   useEffect(() => {
      if(moving){
         const updateLeft = moving.left-start.left;
         const updateTop = moving.top-start.top;

         setEditShape({
            ...editing,
            x:  x + updateLeft,
            y: y + updateTop
         });
         console.log({updateLeft, updateTop})
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
                  left: e.clientX,
                  top: e.clientY
               });
            }
         }}
      >
         
      </div>
   );
}

export default memo(EditShape);