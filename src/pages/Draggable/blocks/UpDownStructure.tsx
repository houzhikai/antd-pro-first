import { useState } from 'react';
import Draggable from 'react-draggable'; // <DraggableCore>

import styled from 'styled-components';

// 容器
const Container = styled.div`
  height: 500px;
`;

// 上边内容部分
const TopContent = styled.div`
  position: relative;
  height: ${(props: any) => props.width}px;
  padding: 20px;
  background-color: #e6e6fa;
`;

// 拖拽部分
const DraggableBox = styled.div`
  position: absolute;
  left: 0;
  top: ${(props: any) => props.top}px;
  width: 100%;
  height: 5px;
  background-color: ${(props: any) => props.background};
  cursor: row-resize;
  z-index: 1000;
`;

// 下边内容部分
const BottomContent = styled.div`
  height: calc(100% - ${(props: any) => props.leftBoxHeight}px);
  padding: 20px;
  background-color: #fff;
  flex-grow: 1;
  z-index: 100;
`;

interface InitStateProps {
  initialTopBoxHeight: number;
  topBoxHeight: number;
  topBoxMinHeight: number;
  topBoxMaxHeight: number;
  dragBoxBackground: string;
}

const UpDownStructure = () => {
  const [state, setState] = useState<InitStateProps>({
    initialTopBoxHeight: 200, // 上边区块初始高度
    topBoxHeight: 200, // 上边区块初始高度
    topBoxMinHeight: 150, // 上边区块最小高度
    topBoxMaxHeight: 300, // 左边区块最大高度
    dragBoxBackground: 'transparent', // 拖拽盒子的背景色
  });
  const onDrag = (ev, ui) => {
    const newLeftBoxHeight = ui.y + state.initialTopBoxHeight;
    setState((obj) => {
      return {
        ...obj,
        topBoxHeight: newLeftBoxHeight,
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
      <TopContent style={{ height: state.topBoxHeight }}>
        <h3 style={{ paddingLeft: 20 }}>目录</h3>
        <ul>
          <li key={1}>目录1</li>
          <li key={2}>目录2</li>
          <li key={3}>目录3</li>
          <li key={4}>这是个非常长非常长非常长的目录</li>
        </ul>
        <Draggable
          axis="y"
          defaultPosition={{ x: 0, y: 0 }}
          bounds={{
            top: state.topBoxMinHeight - state.initialTopBoxHeight,
            bottom: state.topBoxMaxHeight - state.initialTopBoxHeight,
          }}
          onDrag={onDrag}
          onStop={onDragStop}
        >
          <DraggableBox
            style={{
              top: state.initialTopBoxHeight - 5,
              bottom: state.dragBoxBackground,
            }}
          />
        </Draggable>
      </TopContent>
      <BottomContent>
        <h3>这里是内容块</h3>
      </BottomContent>
    </Container>
  );
};

export default UpDownStructure;
