import { ProCard } from '@ant-design/pro-components';

const FooterProCard = () => {
  return (
    <ProCard direction="column" ghost gutter={[0, 16]}>
      <ProCard gutter={16} ghost style={{ height: 200 }}>
        <ProCard colSpan={16} />
        <ProCard colSpan={8} />
      </ProCard>
    </ProCard>
  );
};
export default FooterProCard;
