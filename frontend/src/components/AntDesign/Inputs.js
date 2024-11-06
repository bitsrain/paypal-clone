import React, { useRef, useState } from 'react';
import {
  Button, Divider, Flex, Radio, Space, Tooltip, Card,
  Dropdown, Input, Typography, Select, Switch, Cascader,
} from 'antd';
import { SearchOutlined, InfoCircleOutlined, ClockCircleOutlined, SettingOutlined, UserOutlined, AudioOutlined, EyeInvisibleOutlined, EyeTwoTone  } from '@ant-design/icons';

const { Search, TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

const Inputs = () => (
  <main>
    <Card><h3>Inputs 1 - Basic</h3><Inputs1 /></Card>
    <Card><h3>Inputs 2 - Variants</h3><Inputs2 /></Card>
    <Card><h3>Inputs 3 - Pre / Post tab</h3><Inputs3 /></Card>
    <Card><h3>Inputs 4 - Compact Style</h3><Inputs4 /></Card>
    <Card><h3>Inputs 5 - Search box</h3><Inputs5 /></Card>
    <Card><h3>Inputs 6 - Search box with loading</h3><Inputs6 /></Card>
    <Card><h3>Inputs 7 - TextArea</h3><Inputs7 /></Card>
    <Card><h3>Inputs 8 - Autosizing the height to fit the content</h3><Inputs8 /></Card>
    <Card><h3>Inputs 9 - OTP</h3><Inputs9 /></Card>
    <Card><h3>Inputs 10 - Format Tooltip Input</h3><Inputs10 /></Card>
    <Card><h3>Inputs 11 - prefix and suffix</h3><Inputs11 /></Card>
    <Card><h3>Inputs 12 - Password box</h3><Inputs12 /></Card>
    <Card><h3>Inputs 13 - With clear icon</h3><Inputs13 /></Card>
    <Card><h3>Inputs 14 - With character counting</h3><Inputs14 /></Card>
    <Card><h3>Inputs 15 - Custom count logic</h3><Inputs15 /></Card>
    <Card><h3>Inputs 16 - Status</h3><Inputs16 /></Card>
    <Card><h3>Inputs 17 - Focus</h3><Inputs17 /></Card>
  </main>
);


const Inputs1 = () => <Input placeholder="Basic usage" />;

const Inputs2 = () => (
  <Flex vertical gap={12}>
    <Input placeholder="Outlined" />
    <Input placeholder="Filled" variant="filled" />
    <Input placeholder="Borderless" variant="borderless" />
  </Flex>
);

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);
const Inputs3 = () => (
  <Space direction="vertical">
    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
    <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    <Input
      addonBefore={
        <Cascader
          placeholder="cascader"
          style={{
            width: 150,
          }}
        />
      }
      defaultValue="mysite"
    />
  </Space>
);

const options4 = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];
const Inputs4 = () => (
  <Space direction="vertical" size="middle">
    <Space.Compact>
      <Input defaultValue="26888888" />
    </Space.Compact>
    <Space.Compact>
      <Input
        style={{
          width: '20%',
        }}
        defaultValue="0571"
      />
      <Input
        style={{
          width: '80%',
        }}
        defaultValue="26888888"
      />
    </Space.Compact>
    <Space.Compact>
      <Search addonBefore="https://" placeholder="input search text" allowClear />
    </Space.Compact>
    <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input defaultValue="Combine input and button" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact>
      <Select defaultValue="Zhejiang" options={options4} />
      <Input defaultValue="Xihu District, Hangzhou" />
    </Space.Compact>
    <Space.Compact size="large">
      <Input addonBefore={<SearchOutlined />} placeholder="large size" />
      <Input placeholder="another input" />
    </Space.Compact>
  </Space>
);

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Inputs5 = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 304,
      }}
    />
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);

const Inputs6 = () => (
  <>
    <Search placeholder="input search loading default" loading />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enterButton />
    <br />
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
  </>
);

const Inputs7 = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
);

const Inputs8 = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextArea placeholder="Autosize height based on content lines" autoSize />
      <div
        style={{
          margin: '24px 0',
        }}
      />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{
          minRows: 2,
          maxRows: 6,
        }}
      />
      <div
        style={{
          margin: '24px 0',
        }}
      />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
      />
    </>
  );
};

const Inputs9 = () => {
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title level={5}>With formatter (Upcase)</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      <Title level={5}>With Disabled</Title>
      <Input.OTP disabled {...sharedProps} />
      <Title level={5}>With Length (8)</Title>
      <Input.OTP length={8} {...sharedProps} />
      <Title level={5}>With variant</Title>
      <Input.OTP variant="filled" {...sharedProps} />
      <Title level={5}>With custom display character</Title>
      <Input.OTP mask="🔒" {...sharedProps} />
    </Flex>
  );
};

const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={16}
      />
    </Tooltip>
  );
};
const Inputs10 = () => {
  const [value, setValue] = useState('');
  return (
    <NumericInput
      style={{
        width: 120,
      }}
      value={value}
      onChange={setValue}
    />
  );
};

const Inputs11 = () => (
  <>
    <Input
      placeholder="Enter your username"
      prefix={
        <UserOutlined
          style={{
            color: 'rgba(0,0,0,.25)',
          }}
        />
      }
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
  </>
);

const Inputs12 = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Space direction="vertical">
      <Input.Password placeholder="input password" />
      <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      <Space direction="horizontal">
        <Input.Password
          placeholder="input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
        <Button
          style={{
            width: 80,
          }}
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </Button>
      </Space>
      <Input.Password disabled placeholder="disabled input password" />
    </Space>
  );
};

const onChange13 = (e) => {
  console.log(e);
};
const Inputs13 = () => (
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange13} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange13} />
  </>
);

const onChange14 = (e) => {
  console.log('Change:', e.target.value);
};
const Inputs14 = () => (
  <Flex vertical gap={32}>
    <Input showCount maxLength={20} onChange={onChange14} />
    <TextArea showCount maxLength={100} onChange={onChange14} placeholder="can resize" />
    <TextArea
      showCount
      maxLength={100}
      onChange={onChange14}
      placeholder="disable resize"
      style={{
        height: 120,
        resize: 'none',
      }}
    />
  </Flex>
);

const Inputs15 = () => (
  <Flex vertical gap={16}>
    <div>
      <Typography.Title level={5}>Exceed Max</Typography.Title>
      <Input
        count={{
          show: true,
          max: 10,
        }}
        defaultValue="Hello, antd!"
      />
    </div>

    <div>
      <Typography.Title level={5}>Emoji count as length 1</Typography.Title>
      <Input
        count={{
          show: true,
          strategy: (txt) => txt.length, //runes(txt).length,
        }}
        defaultValue="🔥🔥🔥"
      />
    </div>

    <div>
      <Typography.Title level={5}>Not exceed max</Typography.Title>
      <Input
        count={{
          show: true,
          max: 6,
          strategy: (txt) => txt.length, //runes(txt).length,
          exceedFormatter: (txt, { max }) => txt.slice(0, max).join(''), //runes(txt).slice(0, max).join(''),
        }}
        defaultValue="🔥 antd"
      />
    </div>
  </Flex>
);

const Inputs16 = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Error with prefix" />
    <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Warning with prefix" />
  </Space>
);

const Inputs17 = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState(true);
  const sharedProps = {
    style: {
      width: '100%',
    },
    defaultValue: 'Ant Design love you!',
    ref: inputRef,
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current.focus({
              cursor: 'start',
            });
          }}
        >
          Focus at first
        </Button>
        <Button
          onClick={() => {
            inputRef.current.focus({
              cursor: 'end',
            });
          }}
        >
          Focus at last
        </Button>
        <Button
          onClick={() => {
            inputRef.current.focus({
              cursor: 'all',
            });
          }}
        >
          Focus to select all
        </Button>
        <Button
          onClick={() => {
            inputRef.current.focus({
              preventScroll: true,
            });
          }}
        >
          Focus prevent scroll
        </Button>
        <Switch
          checked={input}
          checkedChildren="Input"
          unCheckedChildren="TextArea"
          onChange={() => {
            setInput(!input);
          }}
        />
      </Space>
      <br />
      {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
    </Space>
  );
};

export default Inputs;
