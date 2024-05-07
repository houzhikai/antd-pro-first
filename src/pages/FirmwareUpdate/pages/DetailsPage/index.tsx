import { Checkbox } from 'antd';
import DetailsTablePage from './DetailsTablePage';

const DetailsPage = () => {
  return (
    <div>
      <Checkbox>全选</Checkbox>
      <Checkbox>全折叠</Checkbox>
      <DetailsTablePage />
    </div>
  );
};

export default DetailsPage;
