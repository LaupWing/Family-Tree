import React, {useState} from 'react';
import styles from './Canvas.module.css';
import Shape from './Shape/Shape';

const Canvas = ({active}) => {
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);

   return (
      <>
         {(start && moving) && <Shape/>}
         <canvas 
            id="canvas" 
            className={styles.canvas}
            onMouseDown={(e)=>{
               if(!start){
                  e.persist();
                  setStart(e);
               }
            }}
            onMouseUp={()=>{
               setStart(false);
               setMoving(false);
            }}
            onMouseMove={(e)=>{
               if(start){
                  setMoving(e);
               }
            }}
         ></canvas>
      </>
   );
}

export default Canvas;