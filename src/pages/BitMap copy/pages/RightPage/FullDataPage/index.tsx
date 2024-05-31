import EchartsFullPage from './EchartsFullPage';
import InformationPage from './InformationPage';

const FullDataPage = () => {
  return (
    <div style={{ height: 'calc(100vh - 40px - 50px - 20px - 25px)' }}>
      <InformationPage />
      <EchartsFullPage />
    </div>
  );
};

export default FullDataPage;
