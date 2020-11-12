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
   const [resizing, setResizing] = useState(false);

   const updatePos = ()=>{
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

   const updateSize = ()=>{
      if(resize){
         setResizing(width);
         console.log(resize, width)
         const updated = shapes.map(x=>{
            if(x===editing){
               x.size = width - (offset*2);
            }
            return x;
         });
         setShapes(updated);
      }
   }

   const pos =  {
      'left': `${(editing.x)-offset}px`,
      'top': `${editing.y-offset}px`,
      'width': `${!resizing ? editing.size+(offset*2): resizing}px`,
      'height': `${!resizing ? editing.size+(offset*2): resizing}px`
   }
   

   useEffect(updateSize,[width]);
   useEffect(updatePos, [moving])


   return (
      <div 
         className={styles.shape}
         ref={targetRef}
         style={{
            ...pos,
            resize: resize ? 'horizontal' : 'none'
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
            setResizing(false);
            // setResize(false);
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