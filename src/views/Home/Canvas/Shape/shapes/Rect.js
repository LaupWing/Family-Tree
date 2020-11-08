export default class Rect{
   constructor(ctx, x, y, size){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.size = size;
   }
   draw(){
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.size, this.size);
      this.ctx.stroke();
   }
}