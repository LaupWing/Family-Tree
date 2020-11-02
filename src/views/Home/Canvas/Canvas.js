import React, {useState, useRef, useEffect} from 'react';
import styles from './Canvas.module.css';
import NewShape from './Shape/NewShape/NewShape';
import EditShape from  './Shape/EditShape/EditShape';

const Canvas = ({
      active, 
      homeContainer, 
      setSnapshots,
      setSnapshot,
      shapes,
      snapshots,
      setShapes
   }) => {
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);
   const [editShape, setEditShape] = useState(false);
   const [ctx, setCtx] = useState(false);
   const [hoverShape, setHoverShape] = useState(false);
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
         setSnapshot(shapes);
      }
   }
   const handleClick = ()=>{
      if(hoverShape){
         setEditShape(hoverShape);
      }
   }
   const checkHover = (e)=>{
      const {left} = canvasRef.current.getBoundingClientRect();
      // eslint-disable-next-line
      const overAShape = shapes.find(shape=>{
         if(
            (e.clientX - left) < (shape.x + shape.dimension) &&
            e.clientY < (shape.y + shape.dimension) &&
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

   useEffect(updateSnapshots,[moving, start]);

   update();
   
   return (
      <>
         {(start && moving) && 
            <NewShape
               start={start}
               moving={moving}
               active={active}
               canvasRef={canvasRef}
               setShapes={setShapes}
               shapes={shapes}
               ctx={ctx}
            />
         }
         {editShape && 
            <EditShape
               editing={editShape}
            />
         }
         <canvas 
            id="canvas" 
            ref={canvasRef}
            width="500"
            height="500"
            className={`${styles.canvas} ${hoverShape ? styles.hovering : ''}`}
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
               checkHover(e)
               if(start){
                  setMoving(e.clientX);
               }
            }}
            onClick={handleClick}
         ></canvas>
      </>
   );
}

export default Canvas;