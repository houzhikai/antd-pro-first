import MyLogo from '@/components/MyLogo';
import FULogo from '@/icon/FULogo.svg';
import { Button, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

import { useIntl } from 'umi';

const FuNav = () => {
  const { formatMessage } = useIntl();

  const onChange: DatePickerProps['onChange'] = (
    date: any,
    dateString: any,
  ) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <MyLogo src={FULogo} />
      <Button type="primary">{formatMessage({ id: 'fu.button' })}</Button>
      <DatePicker onChange={onChange} picker="week" />
    </div>
  );
};
export default FuNav;
