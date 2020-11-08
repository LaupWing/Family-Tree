export default class Circle{
   constructor(ctx, x, y, size){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.size = size;
   }
   draw(){
      this.ctx.beginPath();
      this.ctx.arc(
         this.x + this.size / 2, 
         this.y + this.size / 2, 
         this.size / 2, 
         0,
         2 * Math.PI
      );
      this.ctx.stroke();
   }
}