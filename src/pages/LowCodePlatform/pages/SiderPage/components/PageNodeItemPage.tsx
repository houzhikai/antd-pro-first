import { nodeType } from '../../NodeType';

const PageNodeItemPage = ({ name, type }) => {
  const Component = nodeType[type];
  return (
    <div
      style={{ display: 'inline-block', margin: '4px 6px' }}
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData('text/plain', JSON.stringify({ name, type }))
      }
    >
      <Component name={name} />
    </div>
  );
};
export default PageNodeItemPage;
