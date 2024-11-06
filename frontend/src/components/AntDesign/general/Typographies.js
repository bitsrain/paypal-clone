import React, { useState } from 'react';
import {
  Flex, Space, Card, Typography, Switch, Slider,
} from 'antd';
import { SmileFilled, SmileOutlined } from '@ant-design/icons';

const Typographies = () => (
  <main>
    <Card><h3>Typo 1 (Title Component)</h3><Typo1 /></Card>
    <Card><h3>Typo 2 (Text and link)</h3><Typo2 /></Card>
    <Card><h3>Typo 3 (Copiable)</h3><Typo3 /></Card>
    <Card><h3>Typo 4 (Ellipsis)</h3><Typo4 /></Card>
    <Card><h3>Typo 5 (Controlled ellipsis expand/collapse)</h3><Typo5 /></Card>
    <Card><h3>Typo 6 (Ellipsis from middle)</h3><Typo6 /></Card>
    <Card><h3>Typo 7 (suffix)</h3><Typo7 /></Card>
  </main>
);

const { Title } = Typography;
const Typo1 = () => (
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>
);

const { Text, Link } = Typography;
const Typo2 = () => (
  <Space direction="vertical">
    <Text>Ant Design (default)</Text>
    <Text type="secondary">Ant Design (secondary)</Text>
    <Text type="success">Ant Design (success)</Text>
    <Text type="warning">Ant Design (warning)</Text>
    <Text type="danger">Ant Design (danger)</Text>
    <Text disabled>Ant Design (disabled)</Text>
    <Text mark>Ant Design (mark)</Text>
    <Text code>Ant Design (code)</Text>
    <Text keyboard>Ant Design (keyboard)</Text>
    <Text underline>Ant Design (underline)</Text>
    <Text delete>Ant Design (delete)</Text>
    <Text strong>Ant Design (strong)</Text>
    <Text italic>Ant Design (italic)</Text>
    <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link>
  </Space>
);

const { Paragraph } = Typography;
const Typo3 = () => (
  <>
    <Paragraph copyable>This is a copyable text.</Paragraph>
    <Paragraph
      copyable={{
        text: 'Hello, Ant Design!',
      }}
    >
      Replace copy text.
    </Paragraph>
    <Paragraph
      copyable={{
        icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
        tooltips: ['click here', 'you clicked!!'],
      }}
    >
      Custom Copy icon and replace tooltips text.
    </Paragraph>
    <Paragraph
      copyable={{
        tooltips: false,
      }}
    >
      Hide Copy tooltips.
    </Paragraph>
    <Paragraph
      copyable={{
        text: async () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve('Request text');
            }, 500);
          }),
      }}
    >
      Request copy text.
    </Paragraph>
    <Text
      copyable={{
        text: 'text to be copied',
      }}
    />
  </>
);

const Typo4 = () => {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <>
      <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      />

      <Paragraph ellipsis={ellipsis}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Paragraph
        ellipsis={
          ellipsis
            ? {
                rows: 2,
                expandable: true,
                symbol: 'more',
              }
            : false
        }
      >
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>

      <Text
        style={
          ellipsis
            ? {
                width: 200,
              }
            : undefined
        }
        ellipsis={
          ellipsis
            ? {
                tooltip: 'I am ellipsis now!',
              }
            : false
        }
      >
        Ant Design, a design language for background applications, is refined by Ant UED Team.
      </Text>

      <Text
        code
        style={
          ellipsis
            ? {
                width: 200,
              }
            : undefined
        }
        ellipsis={
          ellipsis
            ? {
                tooltip: 'I am ellipsis now!',
              }
            : false
        }
      >
        Ant Design, a design language for background applications, is refined by Ant UED Team.
      </Text>
    </>
  );
};

const Typo5 = () => {
  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);
  return (
    <Flex gap={16} vertical>
      <Flex gap={16} align="center">
        <Switch
          checked={expanded}
          onChange={() => setExpanded((c) => !c)}
          style={{
            flex: 'none',
          }}
        />
        <Slider
          min={1}
          max={20}
          value={rows}
          onChange={setRows}
          style={{
            flex: 'auto',
          }}
        />
      </Flex>

      <Typography.Paragraph
        ellipsis={{
          rows,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => setExpanded(info.expanded),
        }}
        copyable
      >
        {'Ant Design, a design language for background applications, is refined by Ant UED Team.'.repeat(
          20,
        )}
      </Typography.Paragraph>
    </Flex>
  );
};

const Typo6 = () => (
  <EllipsisMiddle suffixCount={12}>
    In the process of internal desktop applications development, many different design specs and
    implementations would be involved, which might cause designers and developers difficulties and
    duplication and reduce the efficiency of development.
  </EllipsisMiddle>
);
const EllipsisMiddle = ({ suffixCount, children }) => {
  const start = children.slice(0, children.length - suffixCount);
  const suffix = children.slice(-suffixCount).trim();
  return (
    <Text
      style={{
        maxWidth: '100%',
      }}
      ellipsis={{
        suffix,
      }}
    >
      {start}
    </Text>
  );
};

const Typo7 = () => {
  const [rows, setRows] = useState(1);
  const article =
    "To be, or not to be, that is the question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life";
  return (
    <>
      <Slider value={rows} min={1} max={10} onChange={setRows} />
      <Paragraph
        ellipsis={{
          rows,
          expandable: true,
          suffix: '--William Shakespeare',
          onEllipsis: (ellipsis) => {
            console.log('Ellipsis changed:', ellipsis);
          },
        }}
        title={`${article}--William Shakespeare`}
      >
        {article}
      </Paragraph>
    </>
  );
};

export default Typographies;
