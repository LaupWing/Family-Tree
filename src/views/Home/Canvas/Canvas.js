import React, {useState} from 'react';
import styles from './Canvas.module.css';
import shapes from './shapes';

const Canvas = ({active}) => {
   const [start, setStart] = useState(false);
   const handleMove = (e)=>{
      if(start){
         shapes[active](start, e)
      }
   }

   return (
      <canvas 
         id="canvas" 
         className={styles.canvas}
         onMouseDown={(e)=>{
            if(!start){
               console.log(start)
               setStart(e)
            }
         }}
         onMouseUp={()=>setStart(false)}
         onMouseMove={handleMove}
      ></canvas>
   );
}

export default Canvas;