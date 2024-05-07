import TreePage from './TreePage';
// import { Button, Switch, Tooltip } from 'antd';
import '../../index.css';
import { ProviderFunc } from '../../components/containers';

const LeftPage = () => {
  const { testValue } = ProviderFunc();
  return (
    <div className="bit-map-left-page">
      {/* <div style={{ display: 'flex' }}>
        <div>
          <Button>Import</Button>
        </div>
        <Tooltip title="/kkuser/public/soma/projects">
          <div
            style={{
              marginLeft: 6,
              width: 'calc(200px - 32px)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '30px',
            }}
          >
            /kkuser/public/soma/projects
          </div>
        </Tooltip>
      </div>
      <div style={{ margin: '10px 0' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <Button>Import</Button>
          </div>
          <Tooltip title="/kkuser/public/soma/projects">
            <div
              style={{
                marginLeft: 6,
                width: 'calc(200px - 32px)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '30px',
              }}
            >
              /kkuser/public/soma/projects
            </div>
          </Tooltip>
        </div>
      </div> 
       <div>
        <Switch checkedChildren="Multiple" unCheckedChildren="Single" />
      </div> */}
      {testValue ? <TreePage /> : null}
    </div>
  );
};

export default LeftPage;
