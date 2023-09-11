import React, { useRef, useEffect } from 'react';
import { Matrix } from '../utils/Matrix';

const Canvas = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      
      const matrix = new Matrix(canvasRef.current);
      const animate = (time: number) => {
        const deltaTime = time - matrix.last;
        matrix.fps = time;
        if (matrix.timer > matrix.nextFrame) {
          matrix.ctx.textAlign = 'center';
          matrix.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          matrix.ctx.fillRect(0, 0, matrix.canvas.width, matrix.canvas.height);
          matrix.ctx.font = matrix.effect.fontSize + 'px monospace';
          matrix.ctx.fillStyle = '#03A062';
          matrix.ctx.fillStyle = '#0aff0a';
    
          matrix.effect.symbols.forEach((symbol) => symbol.draw(matrix.ctx));
          matrix.timer = 0;
        } else {
          matrix.timer += deltaTime;
        }
        requestAnimationFrame(animate);
      }
      animate(0);
      window.addEventListener('resize', function () {
        matrix.width(window.innerWidth);
        matrix.height(window.innerHeight);
        matrix.resize();
      });
    }
  }, []);
  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
