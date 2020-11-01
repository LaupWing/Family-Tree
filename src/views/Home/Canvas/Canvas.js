import React, {useState, useRef, useEffect} from 'react';
import styles from './Canvas.module.css';
import Shape from './Shape/Shape';

const Canvas = ({
      active, 
      homeContainer, 
      setSnapshots,
      shapes,
      snapshots,
      setShapes
   }) => {
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);
   const [ctx, setCtx] = useState(false);
   const canvasRef = useRef(null);

   const update = ()=>{
      if(ctx){
         const {height, width} = canvasRef.current.getBoundingClientRect();
         ctx.clearRect(0,0, width, height);
         shapes.forEach(shape=>shape.draw());
      }
      requestAnimationFrame(update);
   }
   const updateSnapshots = ()=>{
      if(!moving && !start){
         setSnapshots([...snapshots,shapes]);
      }
   }
   
   useEffect(() => {
      setCtx(canvasRef.current.getContext('2d'));
      canvasRef.current.width = homeContainer.current.offsetWidth;
      canvasRef.current.height = homeContainer.current.offsetHeight;
   }, [homeContainer]);

   useEffect(updateSnapshots,[shapes, moving, start]);

   update();
   
   return (
      <>
         {(start && moving) && 
            <Shape
               start={start}
               moving={moving}
               active={active}
               canvasRef={canvasRef}
               setShapes={setShapes}
               shapes={shapes}
               ctx={ctx}
            />
         }
         <canvas 
            id="canvas" 
            ref={canvasRef}
            width="500"
            height="500"
            className={styles.canvas}
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
                  setMoving(e.clientX);
               }
            }}
         ></canvas>
      </>
   );
}

export default Canvas;