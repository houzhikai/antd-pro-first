interface HandleList {
  type: 'source' | 'target';
  className: string;
  position: string;
  id: string;
  style?: any;
}

export const initHandleList: HandleList[] = [
  {
    type: 'target',
    className: 'top',
    position: 'Top',
    id: 'a',
  },
  {
    type: 'source',
    className: 'right',
    position: 'Right',
    id: 'b',
  },
  {
    type: 'source',
    className: 'bottom',
    position: 'Bottom',
    id: 'c',
    style: { background: '#fff', border: '1px solid #1a192b' },
  },
];
