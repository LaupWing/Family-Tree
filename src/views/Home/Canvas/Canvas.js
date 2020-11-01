import React, {useState, useRef, useEffect} from 'react';
import styles from './Canvas.module.css';
import Shape from './Shape/Shape';
import allShapes from './Shape/shapes';

const Canvas = ({active, homeContainer, setAllSnapshots}) => {
   const [start, setStart] = useState(false);
   const [moving, setMoving] = useState(false);
   const [ctx, setCtx] = useState(false);
   const [shapes, setShapes] = useState([]);
   const [activeShape, setActiveShape] = useState(null);
   const canvasRef = useRef(null);
   
   const update = ()=>{
      if(ctx){
         const {height, width} = canvasRef.current.getBoundingClientRect();
         ctx.clearRect(0,0, width, height);
         shapes.forEach(shape=>shape.draw());
      }
      requestAnimationFrame(update);
   }
   const newShape = ()=>{
      const {left} = canvasRef.current.getBoundingClientRect();
      const shape = new allShapes[active](
         ctx, 
         start.left-left,
         start.top,
         ((moving-left)-(start.left-left))
      );
      setShapes([...shapes, 
         shape  
      ]);
      setActiveShape(shape);
   }

   const updateShape = ()=>{
      const {left} = canvasRef.current.getBoundingClientRect();
      if(activeShape){
         const updated = shapes.map(x=>{
            if(x===activeShape){
               x.dimension = ((moving-left)-(start.left-left));
            }
            return x;
         }) ;
         setShapes(updated);
      }
   }
   
   useEffect(() => {
      setCtx(canvasRef.current.getContext('2d'));
      canvasRef.current.width = homeContainer.current.offsetWidth;
      canvasRef.current.height = homeContainer.current.offsetHeight;
   }, [homeContainer]);
   update();
   
   return (
      <>
         {(start && moving) && 
            <Shape
               start={start}
               moving={moving}
               canvasRef={canvasRef}
               updateShape={updateShape}
               newShape={newShape}
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
            onClick={()=>console.log(shapes)}
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