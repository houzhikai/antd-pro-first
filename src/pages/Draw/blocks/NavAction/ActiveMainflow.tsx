import { Select } from 'antd';
import styles from '../index.less';
import { useModel } from '@umijs/max';

const ActiveMainflow = () => {
  const { mainflowList } = useModel('useDrawModel');
  const oldName =
    mainflowList.map((item) => item.param).filter((item) => item.isActive)[0]
      ?.flowName || '';
  const options = mainflowList.map((item) => {
    return {
      value: item.name,
      label: item.name,
    };
  });
  const onChange = (value: string) => {
    console.log(`selected ${value}, oldName:${oldName}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className={styles.gap}>
      ActiveMainflow:
      <Select
        value={oldName}
        style={{ width: 136 }}
        showSearch
        size="small"
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={options}
      />
    </div>
  );
};

export default ActiveMainflow;
