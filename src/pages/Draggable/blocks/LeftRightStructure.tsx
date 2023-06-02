import { useState } from 'react';
import Draggable from 'react-draggable'; // <DraggableCore>

import styled from 'styled-components';

// 容器
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;

// 左边内容部分
const LeftContent = styled.div`
  position: relative;
  width: ${(props: any) => props.width}px;
  padding: 20px;
  background-color: #e6e6fa;
`;

// 拖拽部分
const DraggableBox = styled.div`
  position: absolute;
  left: ${(props: any) => props.left}px;
  top: 0;
  width: 5px;
  height: 100%;
  background-color: ${(props: any) => props.background};
  cursor: col-resize;
  z-index: 1000;
`;

// 右边内容部分
const RightContent = styled.div`
  width: calc(100% - ${(props: any) => props.leftBoxWidth}px);
  padding: 20px;
  background-color: #fff;
  flex-grow: 1;
  z-index: 100;
`;

interface InitStateProps {
  initialLeftBoxWidth: number;
  leftBoxWidth: number;
  leftBoxMinWidth: number;
  leftBoxMaxWidth: number;
  dragBoxBackground: string;
}
const DraggablePage = () => {
  const [state, setState] = useState<InitStateProps>({
    initialLeftBoxWidth: 150, // 左边区块初始宽度
    leftBoxWidth: 150, // 左边区块初始宽度
    leftBoxMinWidth: 100, // 左边区块最小宽度
    leftBoxMaxWidth: 300, // 左边区块最大宽度
    dragBoxBackground: 'transparent', // 拖拽盒子的背景色
  });
  const onDrag = (ev, ui) => {
    const { initialLeftBoxWidth } = state;
    const newLeftBoxWidth = ui.x + initialLeftBoxWidth;
    setState((obj) => {
      return {
        ...obj,
        leftBoxWidth: newLeftBoxWidth,
        dragBoxBackground: '#FFB6C1',
      };
    });
  };

  // 拖拽结束，重置drag-box的背景色
  const onDragStop = () => {
    setState((obj) => {
      return {
        ...obj,
        dragBoxBackground: 'transparent',
      };
    });
  };

  return (
    <Container>
      <LeftContent style={{ width: state.leftBoxWidth }}>
        <h3 style={{ paddingLeft: 20 }}>目录</h3>
        <ul>
          <li key={1}>目录1</li>
          <li key={2}>目录2</li>
          <li key={3}>目录3</li>
          <li key={4}>这是个非常长非常长非常长的目录</li>
        </ul>
        <Draggable
          axis="x"
          defaultPosition={{ x: 0, y: 0 }}
          bounds={{
            left: state.leftBoxMinWidth - state.initialLeftBoxWidth,
            right: state.leftBoxMaxWidth - state.initialLeftBoxWidth,
          }}
          onDrag={onDrag}
          onStop={onDragStop}
        >
          <DraggableBox
            style={{
              left: state.initialLeftBoxWidth - 5,
              background: state.dragBoxBackground,
            }}
          />
        </Draggable>
      </LeftContent>
      <RightContent>
        <h3>这里是内容块</h3>
      </RightContent>
    </Container>
  );
};

export default DraggablePage;
