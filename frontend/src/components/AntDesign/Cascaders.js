import React, { useState } from 'react';
import {
  Divider, Flex, Radio, Space, Card, Cascader
} from 'antd';

const Cascaders = () => (
  <main>
    <Card><h3>Cascaders 1 (Basic)</h3><Cascaders1 /></Card>
    <Card><h3>Cascaders 2 (Default value)</h3><Cascaders2 /></Card>
    <Card><h3>Cascaders 3 (Custom trigger)</h3><Cascaders3 /></Card>
    <Card><h3>Cascaders 4 (Hover)</h3><Cascaders4 /></Card>
    <Card><h3>Cascaders 5 (Disabled option)</h3><Cascaders5 /></Card>
    <Card><h3>Cascaders 6 (Change on select)</h3><Cascaders6 /></Card>
    <Card><h3>Cascaders 7 (Multiple)</h3><Cascaders7 /></Card>
    <Card><h3>Cascaders 8 (ShowCheckedStrategy)</h3><Cascaders8 /></Card>
    <Card><h3>Cascaders 9 (Custom render)</h3><Cascaders9 /></Card>
    <Card><h3>Cascaders 10 (Search)</h3><Cascaders10 /></Card>
    <Card><h3>Cascaders 11 (Load options lazily)</h3><Cascaders11 /></Card>
    <Card><h3>Cascaders 12 (Custom Field Names)</h3><Cascaders12 /></Card>
    <Card><h3>Cascaders 13 (Placement)</h3><Cascaders13 /></Card>
    <Card><h3>Cascaders 14 (Custom dropdown)</h3><Cascaders14 /></Card>
    <Card><h3>Cascaders 15 (Panel)</h3><Cascaders15 /></Card>
    <Card><h3>Cascaders 16 (Status)</h3><Cascaders16 /></Card>
  </main>
);

const Cascaders1 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Cascader options={options} onChange={onChange} placeholder="Please select" />
  )
};

const Cascaders2 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />
  );
};

const Cascaders3 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
        },
      ],
    },
  ];

  const [text, setText] = useState('Unselect');
  const onChange = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };
  return (
    <span>
      {text}
      &nbsp;
      <Cascader options={options} onChange={onChange}>
        <a>Change city</a>
      </Cascader>
    </span>
  );
};

const Cascaders4 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };
  
  // Just show the latest item.
  const displayRender = (labels) => labels[labels.length - 1];

  return (
    <Cascader
      options={options}
      expandTrigger="hover"
      displayRender={displayRender}
      onChange={onChange}
    />
  );
};

const Cascaders5 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      disabled: true,
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };

  return <Cascader options={options} onChange={onChange} />;
};

const Cascaders6 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hanzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };

  return <Cascader options={options} onChange={onChange} changeOnSelect />;
};

const Cascaders7 = () => {
  const options = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20).fill(null).map((_, index) => ({
        label: `Number ${index}`,
        value: index,
      })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
              disableCheckbox: true,
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };
  
  return (
    <Cascader
      style={{
        width: '100%',
      }}
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
    />
  );
};

const { SHOW_CHILD } = Cascader;
const Cascaders8 = () => {
  const options = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20).fill(null).map((_, index) => ({
        label: `Number ${index}`,
        value: index,
      })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];

  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{
          width: '100%',
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird'],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{
          width: '100%',
        }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={[['bamboo']]}
      />
    </>
  );
};

const Cascaders9 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              code: 752100,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              code: 453400,
            },
          ],
        },
      ],
    },
  ];
  const handleAreaClick = (e, label, option) => {
    e.stopPropagation();
    console.log('clicked', label, option);
  };
  const displayRender = (labels, selectedOptions = []) =>
    labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
          </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });

  return (
    <Cascader
      options={options}
      defaultValue={['zhejiang', 'hangzhou', 'xihu']}
      displayRender={displayRender}
      style={{
        width: '100%',
      }}
    />
  );
};

const Cascaders10 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
            {
              value: 'xiasha',
              label: 'Xia Sha',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Please select"
      showSearch={{
        filter,
      }}
      onSearch={(value) => console.log(value)}
    />
  );
};

const Cascaders11 = () => {
  const optionLists = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      isLeaf: false,
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      isLeaf: false,
    },
  ];

  const [options, setOptions] = useState(optionLists);
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];

    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };
  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};

const Cascaders12 = () => {
  const options = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
      items: [
        {
          code: 'hangzhou',
          name: 'Hangzhou',
          items: [
            {
              code: 'xihu',
              name: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      code: 'jiangsu',
      name: 'Jiangsu',
      items: [
        {
          code: 'nanjing',
          name: 'Nanjing',
          items: [
            {
              code: 'zhonghuamen',
              name: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Cascader
      fieldNames={{
        label: 'name',
        value: 'code',
        children: 'items',
      }}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  );
}

const Cascaders13 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Cascader options={options} placeholder="Please select" placement={placement} />
    </>
  );
};

const dropdownRender = (menus) => (
  <div>
    {menus}
    <Divider
      style={{
        margin: 0,
      }}
    />
    <div
      style={{
        padding: 8,
      }}
    >
      The footer is not very short.
    </div>
  </div>
);
const Cascaders14 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  return (
    <Cascader options={options} dropdownRender={dropdownRender} placeholder="Please select" />
  );
};

const Cascaders15 = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };
  const onMultipleChange = (value) => {
    console.log(value);
  };

  return (
    <Flex vertical gap="small" align="flex-start">
      <Cascader.Panel options={options} onChange={onChange} />
      <Cascader.Panel multiple options={options} onChange={onMultipleChange} />
      <Cascader.Panel />
    </Flex>
  );
};

const Cascaders16 = () => (
  <Space direction="vertical">
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);

export default Cascaders;
