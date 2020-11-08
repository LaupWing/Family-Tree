export default class Hex{
   constructor(ctx, x, y, size){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.size = size;
   }
   draw(){
      this.ctx.beginPath();
      for (let side = 0; side < 7; side++) {
         this.ctx.lineTo(
            (this.x + (this.size/2)) + 
            (this.size /2) * 
            Math.cos(side * 2 * Math.PI / 6), 
            (this.y + (this.size/2)) + 
            (this.size /2) 
            * Math.sin(side * 2 * Math.PI / 6)
         );
      }

      this.ctx.stroke();
   }
}