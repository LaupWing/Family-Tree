export default class Rect{
   constructor(ctx, x, y, dimension, offset){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.dimension = dimension;
      this.offset = offset;
   }
   draw(){
      this.ctx.beginPath();
      this.ctx.rect(
         this.x + this.offset, 
         this.y + this.offset, 
         this.dimension - (this.offset * 2), 
         this.dimension - (this.offset * 2));
      this.ctx.stroke();
   }
}