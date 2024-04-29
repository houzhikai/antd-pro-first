import CustomDragDropPage from './GragGropComponent';
import { initialItems } from './data';

const DragDropPage = () => {
  return <CustomDragDropPage initValue={initialItems} rowKey="id" />;
};
export default DragDropPage;
