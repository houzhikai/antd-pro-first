import { Alert } from 'antd';

const AlertPrompt = ({ waferMapData }) => {
  const xMax = waferMapData.xMax;
  const yMax = waferMapData.yMax;

  const showPrompt =
    xMax === '' && yMax === ''
      ? 'GridXmax and GridYmax'
      : xMax === ''
      ? 'GridXmax'
      : yMax === ''
      ? 'GridYmax'
      : '';
  return (
    <div>
      {showPrompt !== '' ? (
        <Alert type="error" message={`${showPrompt} have no data!`} banner />
      ) : null}
    </div>
  );
};

export default AlertPrompt;
