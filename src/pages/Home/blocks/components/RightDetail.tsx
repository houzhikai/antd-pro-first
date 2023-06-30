import React from 'react';
import { Button, Col, Image, Row } from 'antd';
import '../home.less';

const RightDetail = () => {
  const list = [
    '2023中国国际半导体展',
    '2023年6月29日 ~ 2023年7月1日',
    'E5馆，5623 展位，上海新国际博览中心',
  ];
  return (
    <div style={{ flex: 1 }}>
      <div className="title">2023中国国际半导体展</div>
      <div className="invitation">
        <Image
          src="http://www.sandtekcorp.com.cn/sandtekc/images/2023_semiconCa.jpg"
          preview={false}
          className="png"
        />
        <div className="detail">
          {list.map((item) => (
            <div className="detail-item" key={item}>
              {item}
            </div>
          ))}
          <div>
            <Button type="primary" size="small">
              阅读更多...
            </Button>
          </div>
        </div>
      </div>

      {/* other */}
      <Row className="other">
        <Col span={10}>
          <div className="title">测试方案</div>
          <div className="layout">
            <Image
              style={{ width: 113, height: 113, marginTop: 10 }}
              preview={false}
              src="http://www.sandtekcorp.com.cn/sandtekc/images/ADAPTSTAR_product_S.png"
            />
            <div className="right">
              <div className="right-item">
                胜达克半导体提供多种测试系统和解决方案，满足数字、模拟和混合信号测试需求。
              </div>
              <div className="right-item">射频信号测试解决方案也正在推出！</div>
              <Button className="right-item" type="primary" size="small">
                阅读更多...
              </Button>
            </div>
          </div>
        </Col>
        <Col span={10}>
          <div className="title">测试方案</div>
          <div className="layout">
            <Image
              style={{ width: 128, height: 128, marginTop: 10 }}
              preview={false}
              src="http://www.sandtekcorp.com.cn/sandtekc/images/logo_ab.png"
            />
            <div className="right">
              <div className="right-item">
                胜达克半导体科技(Sandtek)是一家专业从事半导体测试设备技术研发、生产、销售、咨询和服务于一体的全球化高科技公司。
              </div>
              <Button className="right-item" type="primary" size="small">
                阅读更多...
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RightDetail;
