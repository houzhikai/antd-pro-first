import { Button } from 'antd';
import React, { useState } from 'react';

const SignatureCanvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState<any>([]);
  const canvasRef = React.useRef<any>(null);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    setLines([
      ...lines,
      { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
    ]);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };
  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setLines([]);
  };

  const handleSaveCanvas = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    console.log({ dataUrl });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        style={{ border: '1px solid #ccc' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <Button onClick={handleClearCanvas}>清除签名</Button>
      <Button type="primary" onClick={handleSaveCanvas}>
        保存签名
      </Button>
    </div>
  );
};

export default SignatureCanvas;
