import { Form, message } from 'antd';

const NavAction = () => {
  const onFinish = (values) => {
    message.info(JSON.stringify(values));
  };

  return (
    <Form
      name="basic"
      //   initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div style={{ display: 'flex', justifyContent: 'end', marginRight: 25 }}>
        {/* <Form.Item label="Template" name="Template">
          <Select style={{ width: 100, marginRight: 10 }} options={options} />
        </Form.Item>

        <Form.Item label="Dut(s)" name="Dut(s)">
          <Select
            style={{ width: 200, marginRight: 10 }}
            mode="multiple"
            options={options}
            maxTagCount="responsive"
            maxTagPlaceholder={(omittedValues) => (
              <Tooltip
                title={omittedValues.map(({ label }) => label).join(', ')}
              >
                <span>Hover Me</span>
              </Tooltip>
            )}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Convert
          </Button>
        </Form.Item> */}
      </div>
    </Form>
  );
};

export default NavAction;
