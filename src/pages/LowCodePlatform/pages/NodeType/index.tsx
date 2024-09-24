import { Button } from 'antd';
import NavPage from './NavPage';

export const nodeType = {
  typeA: ({ name }) => <Button>{name}</Button>,
  typeB: ({ name }) => <Button type="primary">{name}</Button>,
  nav: ({}) => <NavPage />,
};
