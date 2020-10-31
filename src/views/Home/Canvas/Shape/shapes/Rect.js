export default class Rect{
   constructor(ctx, x, y, dimension){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.dimension = dimension;
   }
   draw(){
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.dimension, this.dimension);
      console.log(this)
      this.ctx.stroke();
   }
}