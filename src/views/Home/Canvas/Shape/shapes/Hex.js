export default class Circle{
   constructor(ctx, x, y, dimension){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.dimension = dimension;
   }
   draw(){
      this.ctx.beginPath();
      this.ctx.arc(
         this.x + this.dimension / 2, 
         this.y + this.dimension / 2, 
         this.dimension / 2, 
         0,
         2 * Math.PI
      );
      this.ctx.stroke();
   }
}