import { useEffect, useState } from 'react';
import './index.less';

const AxisDemoPage = () => {
  const [dataRange] = useState({
    minX: 0,
    maxX: 100,
    minY: 0,
    maxY: 100,
  });

  useEffect(() => {
    const drawAxis = () => {
      const container = document.getElementById('axis-container');
      if (container) {
        // Clear previous content
        container.innerHTML = '';

        // Draw X-axis
        const xAxis = document.createElement('div');
        xAxis.style.width = '100%';
        xAxis.style.height = '2px';
        xAxis.style.backgroundColor = 'black';
        xAxis.style.position = 'absolute';
        xAxis.style.bottom = '0';
        container.appendChild(xAxis);

        // Draw Y-axis
        const yAxis = document.createElement('div');
        yAxis.style.width = '2px';
        yAxis.style.height = '100%';
        yAxis.style.backgroundColor = 'black';
        yAxis.style.position = 'absolute';
        yAxis.style.left = '0';
        container.appendChild(yAxis);

        // Draw X-axis ticks and labels
        for (let i = dataRange.minX; i <= dataRange.maxX; i += 10) {
          const tickX = document.createElement('div');
          tickX.style.width = '1px';
          tickX.style.height = '5px';
          tickX.style.backgroundColor = 'gray';
          tickX.style.position = 'absolute';
          tickX.style.left = `${
            ((i - dataRange.minX) / (dataRange.maxX - dataRange.minX)) * 100
          }%`;
          tickX.style.bottom = '0';
          container.appendChild(tickX);

          const labelX: any = document.createElement('div');
          labelX.textContent = i;
          labelX.style.position = 'absolute';
          labelX.style.left = `${
            ((i - dataRange.minX) / (dataRange.maxX - dataRange.minX)) * 100
          }%`;
          labelX.style.bottom = '-20px';
          container.appendChild(labelX);
        }

        // Draw Y-axis ticks and labels
        for (let i = dataRange.minY; i <= dataRange.maxY; i += 10) {
          const tickY = document.createElement('div');
          tickY.style.width = '5px';
          tickY.style.height = '1px';
          tickY.style.backgroundColor = 'gray';
          tickY.style.position = 'absolute';
          tickY.style.top = `${
            ((i - dataRange.minY) / (dataRange.maxY - dataRange.minY)) * 100
          }%`;
          tickY.style.left = '0';
          container.appendChild(tickY);

          const labelY: any = document.createElement('div');
          labelY.textContent = i;
          labelY.style.position = 'absolute';
          labelY.style.left = '-50px';
          labelY.style.top = `${
            ((i - dataRange.minY) / (dataRange.maxY - dataRange.minY)) * 100
          }%`;
          container.appendChild(labelY);
        }
      }
    };

    drawAxis();
  }, [dataRange]);

  return (
    <div
      style={{ width: '500px', height: '300px', marginLeft: 60, padding: 0 }}
    >
      <div id="axis-container" />
    </div>
  );
};

export default AxisDemoPage;
