import React, {useState} from 'react';
import styles from './Canvas.module.css';
import Shape from './Shape/Shape';

const Canvas = ({active}) => {
   const [start, setStart] = useState(false);
   const handleMove = (e)=>{
      if(start){
         
      }
   }

   return (
      <canvas 
         id="canvas" 
         className={styles.canvas}
         onMouseDown={(e)=>{
            if(!start){
               e.persist();
               setStart(e);
            }
         }}
         onMouseUp={()=>setStart(false)}
         onMouseMove={handleMove}
      ></canvas>
   );
}

export default Canvas;