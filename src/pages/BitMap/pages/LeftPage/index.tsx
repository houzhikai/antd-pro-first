import TreePage from './TreePage';
import '../../index.css';

const LeftPage = () => {
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
      <TreePage />
    </div>
  );
};

export default LeftPage;
