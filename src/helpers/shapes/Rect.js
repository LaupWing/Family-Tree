export default class Rect{
   constructor(ctx, x, y, size, color, width){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.width = width;
   }
   draw(){
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.width;
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.size, this.size);
      this.ctx.stroke();
   }
}