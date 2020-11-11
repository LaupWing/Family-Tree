import React, {useState, useEffect, memo} from 'react';
import styles from './EditShape.module.css';
import { withResizeDetector } from 'react-resize-detector';
import Move from '../../../../../components/Icons/Move/Move';
import Resize from '../../../../../components/Icons/Resize/Resize';

const EditShape = ({
      offset, 
      editing,
      start,
      setStart,
      moving,
      setMoving,
      canvasRef,
      shapes,
      setShapes,
      width,
      targetRef
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const [startPoint, setStartPoint] = useState(false);
   const [resize, setResize] = useState(false);

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

   const pos =  {
      'left': `${(editing.x)-offset}px`,
      'top': `${editing.y-offset}px`,
      'width': `${editing.size+(offset*2)}px`,
      'height': `${editing.size+(offset*2)}px`
   }
   

   useEffect(()=>{
      // setResizing(true);
      // console.log(editing.size+(offset*2))
      // console.log(width)
   },[width]);
   useEffect(update, [moving])


   return (
      <div 
         className={styles.shape}
         ref={targetRef}
         style={{
            ...pos,
            resize: resize ? 'both' : 'none'
         }}
         onMouseDown={(e)=>{
         if(!start && !resize){
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
            <Move 
               className={!resize ? styles.active : ''}
               onClick={()=>setResize(false)}
            />
            <Resize 
               className={resize ? styles.active : ''}
               onClick={()=>{
                  setResize(true)
               }}
            />
         </div>
   );
}

export default withResizeDetector(memo(EditShape));