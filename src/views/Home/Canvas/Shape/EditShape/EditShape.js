import React, {useState, useEffect, memo} from 'react';
import styles from './EditShape.module.css';
import Move from '../../../../../components/Icons/Move/Move';
import {Resizable} from 're-resizable';
import Resize from '../../../../../components/Icons/Resize/Resize';

const EditShape = ({
      offset, 
      editing,
      start,
      setStart,
      moving,
      setMoving,
      canvasRef,
      snapshot,
      setSnapshot,
      targetRef
   }) => {
   const {left} = canvasRef.current.getBoundingClientRect();
   const [startPoint, setStartPoint] = useState(false);
   const [resize, setResize] = useState(false);
   const [resizing, setResizing] = useState(false);
   const [initialResize, setInitialResize] = useState(false);

   const updatePos = ()=>{
      if(moving){
         const updateLeft = moving.left-startPoint.left;
         const updateTop = moving.top-startPoint.top;
         const updated = snapshot.map(x=>{
            if(x===editing){
               console.log(x);
               x.x = start.left + updateLeft - offset;
               x.y = start.top + updateTop - offset;
            }
            return x;
         });
         setSnapshot(updated);
      }
   }

   const updateSize = (_1, _2, _3, delta)=>{
      setResizing(delta.width > 0 ? 
         delta.width + initialResize.width :
         delta.height + initialResize.height
      );
      const updated = snapshot.map(x=>{
         if(x===editing){
            console.log(x)
            x.size = resizing - (offset*2);
         }
         return x;
      });
      setSnapshot(updated);
   }

   const pos =  {
      'left': `${(editing.x)-offset}px`,
      'top': `${editing.y-offset}px`,
   }
   const size = {
      'width': !resizing ? editing.size+(offset*2): resizing,
      'height': !resizing ? editing.size+(offset*2): resizing
   }
   
   useEffect(updatePos, [moving])

   return (
      <Resizable 
         className={`${styles.shape} ${resize ? styles.resize : ''}`}
         ref={targetRef}
         size={{
            width: editing.size+(offset*2),
            height: editing.size+(offset*2)
         }}
         onResize={updateSize}
         onResizeStart={()=>setInitialResize(size)}
         lockAspectRatio={1/1}
         style={{
            ...pos,
            position: 'absolute',
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
            setInitialResize(false);
         }}
         onMouseMove={(e)=>{
            if(start){
               setMoving({
                  left: e.clientX - left,
                  top: e.clientY
               });
            }
         }}
         enable={{ 
            top:false, 
            right:resize, 
            bottom:resize, 
            left:false, 
            topRight:false, 
            bottomRight:resize, 
            bottomLeft:false, 
            topLeft:false 
         }}
      >
         <Move 
            className={!resize ? styles.active : ''}
            onClick={()=>setResize(false)}
         />
         <Resize 
            className={resize ? styles.active : ''}
            onClick={()=>setResize(true)}
         />
      </Resizable>
   );
}

export default memo(EditShape);