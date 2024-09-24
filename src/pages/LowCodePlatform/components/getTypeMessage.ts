import { message } from 'antd';

const ENUM = {
  SUCCESS: 0,
  WARNING: 1,
  ERROR: 2,
  INFO: 3,
};
export const getTypeMessage = (type, msg) => {
  if (type === ENUM.SUCCESS) {
    message.success(msg, 5);
  } else if (type === ENUM.WARNING) {
    message.warning(msg, 5);
  } else if (type === ENUM.ERROR) {
    message.error(msg, 5);
  } else {
    message.info(msg, 5);
  }
};
