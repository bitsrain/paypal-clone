import React, { useState } from 'react';
import {
  Button, Divider, Flex, Radio, Space, Tooltip, Card,
  Dropdown,
} from 'antd';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined  } from '@ant-design/icons';

const Buttons = () => (
  <main>
    <Card><h3>Buttons 1</h3><Buttons1 /></Card>
    <Card><h3>Buttons 2 (Icon position)</h3><Buttons2 /></Card>
    <Card><h3>Buttons 3 (Disabled state)</h3><Buttons3 /></Card>
    <Card><h3>Buttons 4 (Size)</h3><Buttons4 /></Card>
    <Card><h3>Buttons 5 (Multiple buttons)</h3><Buttons5 /></Card>
    <Card><h3>Buttons 6 (Loading state)</h3><Buttons6 /></Card>
    <Card><h3>Buttons 7 (Danger buttons)</h3><Buttons7 /></Card>
    <Card><h3>Buttons 8 (Ghost buttons?)</h3><Buttons8 /></Card>
    <Card><h3>Buttons 9 (Block buttons)</h3><Buttons9 /></Card>
  </main>
);

const Buttons1 = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
);
const Buttons2 = () => {
  const [position, setPosition] = useState('end');
  return (
    <>
      <Space>
        <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Flex gap="small" vertical>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />} iconPosition={position}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} iconPosition={position}>
            Search
          </Button>
        </Flex>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} type="text" iconPosition={position}>
            Search
          </Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />} iconPosition={position}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" iconPosition={position} />
          <Button type="primary" loading iconPosition={position}>
            Loading
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
const Buttons3 = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Flex>
    <Flex gap="small">
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="primary" href="https://ant.design/index-cn">
        Href Primary
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        Href Primary(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
    </Flex>
    <Flex gap="small" className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </Flex>
  </Flex>
);
const Buttons4 = () => {
  const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Flex>
        <Button type="link" size={size}>
          Link
        </Button>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
const Buttons5 = () => {
  const onMenuClick = (e) => {
    console.log('click', e);
  };
  const items = [
    {
      key: '1',
      label: '1st item',
    },
    {
      key: '2',
      label: '2nd item',
    },
    {
      key: '3',
      label: '3rd item',
    },
  ];

  return (
    <Flex align="flex-start" gap="small" vertical>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown.Button
        menu={{
          items,
          onClick: onMenuClick,
        }}
      >
        Actions
      </Dropdown.Button>
    </Flex>
  );
};
const Buttons6 = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" align="center" wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Flex>
      <Flex gap="small" wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Flex>
    </Flex>
  );
};
const Buttons7 = () => (
  <Flex wrap gap="small">
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Flex>
);
const Buttons8 = () => (
  <Flex wrap gap="small" style={{ background: '#cccccc' }}>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </Flex>
);
const Buttons9 = () => (
  <Flex
    vertical
    gap="small"
    style={{
      width: '100%',
    }}
  >
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button disabled block>
      disabled
    </Button>
    <Button type="text" block>
      text
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </Flex>
);

export default Buttons;
