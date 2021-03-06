import React, {useState, useRef, useEffect} from 'react';
import styles from './Canvas.module.css';
import NewShape from './Shape/NewShape/NewShape';
import EditShape from  './Shape/EditShape/EditShape';

const Canvas = ({
      active, 
      homeContainer, 
      setSnapshots,
      setSnapshot,
      snapshot,
      setEditShape,
      editShape,
      start,
      setStart,
      moving,
      setMoving
   }) => {

   const [ctx, setCtx] = useState(false);
   const [hoverShape, setHoverShape] = useState(false);
   const canvasRef = useRef(null);
   const offset = 10;
   
   const update = ()=>{
      if(ctx){
         const {height, width} = canvasRef.current.getBoundingClientRect();
         ctx.clearRect(0,0, width, height);
         snapshot.forEach(shape=>shape.draw());
      }
      requestAnimationFrame(update);
   }
   const handleClick = (e)=>{
      if(hoverShape && !editShape){
         setEditShape(hoverShape);
      }
      if(editShape){
         const {left} = canvasRef.current.getBoundingClientRect();
         const outside = (e.clientX - left) > (editShape.x + editShape.size + offset) ||
            e.clientY > (editShape.y + editShape.size + offset) ||
            e.clientY < editShape.y -offset ||
         (e.clientX-left) < editShape.x - offset;
         
         if(outside){
            if(hoverShape){
               setEditShape(hoverShape);
            }else{
               setEditShape(false);
            }
         }
      }
   }
   const checkHover = (e)=>{
      if(start)   return;
      const {left} = canvasRef.current.getBoundingClientRect();
      // eslint-disable-next-line
      const overAShape = snapshot.find(shape=>{
         if(editShape){
            if(
               (e.clientX - left) < (shape.x + shape.size + offset) &&
               e.clientY < (shape.y + shape.size + offset) &&
               e.clientY > shape.y - offset &&
               (e.clientX-left) > shape.x - offset
            ){
               return shape;
            }
         }
         if(
            (e.clientX - left) < (shape.x + shape.size) &&
            e.clientY < (shape.y + shape.size) &&
            e.clientY > shape.y &&
            (e.clientX-left) > shape.x
         ){
            return shape;
         }
      });
      if(overAShape){
         setHoverShape(overAShape);
      }else{
         setHoverShape(false);
      }
   }
   
   useEffect(() => {
      setCtx(canvasRef.current.getContext('2d'));
      canvasRef.current.width = homeContainer.current.offsetWidth;
      canvasRef.current.height = homeContainer.current.offsetHeight;
   }, [homeContainer]);

   useEffect(()=>{
      update();
   });
   
   return (
      <>
         {(start && moving) && 
            <NewShape
               start={start}
               moving={moving}
               active={active}
               canvasRef={canvasRef}
               setSnapshot={setSnapshot}
               snapshot={snapshot}
               ctx={ctx}
               offset={offset}
            />
         }
         {editShape && 
            <EditShape
               editShape={editShape}
               setEditShape={setEditShape}
               canvasRef={canvasRef}
               offset={offset}
               start={start}
               setStart={setStart}
               moving={moving}
               setMoving={setMoving}
               snapshot={snapshot}
               setSnapshot={setSnapshot}
               setSnapshots={setSnapshots}
            />
         }
         <canvas 
            id="canvas" 
            ref={canvasRef}
            width="500"
            height="500"
            className={`${styles.canvas} ${hoverShape ? styles.hovering : ''}`}
            onMouseDown={(e)=>{
               if(!start && !editShape && !hoverShape){
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
               if(moving && start){
                  setSnapshots();
               }
            }}
            onMouseMove={(e)=>{
               checkHover(e);
               if(start && !editShape){
                  setMoving(e.clientX);
               }
            }}
            onClick={handleClick}
         ></canvas>
      </>
   );
}

export default Canvas;