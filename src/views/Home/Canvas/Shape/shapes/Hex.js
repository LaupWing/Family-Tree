export default class Hex{
   constructor(ctx, x, y, size, color, width){
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.width = width;
   }
   draw(){
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.width;
      let angle = 0;

      for (let i = 0; i <= 6; i++) {
         angle = (2 * Math.PI) / 6 * (i + 0.5); 
         const x_i = (this.x + (this.size/2)) + (this.size/2) * Math.cos(angle);
         const y_i = (this.y + (this.size/2)) + (this.size/2) * Math.sin(angle);
         if (i === 0) {
            this.ctx.moveTo(x_i, y_i);
         } else {
            this.ctx.lineTo(x_i, y_i); 
         }
      }
      this.ctx.stroke();
   }
}