const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'red';
    
    const cx = width * 0.5;
    const cy = height * 0.5;

    context.save();
    context.beginPath();
    context.translate(cx, cy);
    context.rect(-cx * 0.01, -cy * 0.01, width * 0.01, height * 0.01);
    context.fill();
    context.restore();
    
  };
};

canvasSketch(sketch, settings);
