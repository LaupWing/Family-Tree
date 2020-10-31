import React, {useState, useRef} from 'react';
import styles from './Canvas.module.css';
import Shape from './Shape/Shape';

const Canvas = ({active}) => {
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);
   const canvasRef = useRef(null);

   return (
      <>
         {(start && moving) && 
            <Shape
               start={start}
               moving={moving}
               active={active}
               canvasRef={canvasRef}
            />
         }
         <canvas 
            id="canvas" 
            ref={canvasRef}
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