import { Tooltip } from "antd";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import {
  CheckOutlined,
  CloseOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

type WebSocketComponentProps = {
  url: string;
  onMessage: (message: string) => void;
  setLoading: (isLoading: boolean) => void;
};

type WebSocketComponentRef = {
  sendMsg: (message: string) => void;
};
const WebSocketComponent = forwardRef<
  WebSocketComponentRef,
  WebSocketComponentProps
>(({ url, onMessage, setLoading }, ref) => {
  const [isConnected, setIsConnected] = useState(false);
  const [count, setReConnectCount] = useState(0); //重连次数

  let heart: NodeJS.Timeout | undefined;
  let socket = new WebSocket(url);
  useEffect(() => {
    // connectSocket();
    socket.onopen = () => {
      console.log("WebSocket connection success.");
      // setSocket(socket);
      setIsConnected(true);
      setReConnectCount(0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      heart = setInterval(() => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(`heartbeat`);
        } else {
          if (heart !== undefined) {
            clearInterval(heart);
            heart = undefined;
          }
        }
      }, 10 * 1000);
    };

    socket.onmessage = (event) => {
      // console.log('Received message:', event.data);
      onMessage(event.data);
      setLoading(true);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
      // setSocket(null);
      setIsConnected(false);
      if (heart !== undefined) {
        clearInterval(heart);
        heart = undefined;
      }
      // 断开连接后，每3秒尝试重新连接
      if (count >= 100) {
        socket.close();
        return;
      }
      setTimeout(() => {
        setReConnectCount((c) => c + 1);
      }, 3000);
    };

    socket.onerror = (error) => {
      setIsConnected(false);
      console.log(error, count);
    };
  }, [url, onMessage, count]);

  const sendMsg = (message: any) => {
    socket.send(message);
  };

  useImperativeHandle(ref, () => ({
    sendMsg,
  }));
  const getWebSocketStatus = (val: any) => {
    let value: any = { icon: undefined, title: undefined, color: undefined };
    if (val) {
      value = {
        icon: <CheckOutlined />,
        title: "WebSocket connected",
        color: "#7de749",
      };
    } else if (count >= 10) {
      value = {
        icon: <CloseOutlined />,
        title: "WebSocket disconnect",
        color: "#ff0101",
      };
    } else {
      value = {
        icon: <EllipsisOutlined />,
        title: "WebSocket disconnected. Reconnecting...",
        color: "#1677ff",
      };
    }
    return value;
  };

  const floatingStyle = {
    background: getWebSocketStatus(isConnected).color,
    borderRadius: "50%",
  };

  return (
    <div className="floating-box">
      <Tooltip title={getWebSocketStatus(isConnected).title} placement="left">
        <div style={floatingStyle}>{getWebSocketStatus(isConnected).icon}</div>
      </Tooltip>
    </div>
  );
});

export default WebSocketComponent;
