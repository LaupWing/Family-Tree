export default class Circle{
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