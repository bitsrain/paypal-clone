import React, { useCallback, useState } from 'react';
import {
  Flex, Space, Card, AutoComplete, Input
} from 'antd';
import { CloseSquareFilled, UserOutlined } from '@ant-design/icons';

const AutoCompletes = () => (
  <main>
    <Card><h3>AutoCompletes 1 (Basic)</h3><AutoCompletes1 /></Card>
    <Card><h3>AutoCompletes 2 (Customized)</h3><AutoCompletes2 /></Card>
    <Card><h3>AutoCompletes 3 (Customized Input Component)</h3><AutoCompletes3 /></Card>
    <Card><h3>AutoCompletes 4 (Non-case-sensitive)</h3><AutoCompletes4 /></Card>
    <Card><h3>AutoCompletes 5 (Lookup-Patterns - Certain Category)</h3><AutoCompletes5 /></Card>
    <Card><h3>AutoCompletes 6 (Lookup-Patterns - Uncertain Category)</h3><AutoCompletes6 /></Card>
    <Card><h3>AutoCompletes 7 (Status)</h3><AutoCompletes7 /></Card>
    <Card><h3>AutoCompletes 8 (Variants)</h3><AutoCompletes8 /></Card>
    <Card><h3>AutoCompletes 9 (Customize clear button)</h3><AutoCompletes9 /></Card>
  </main>
);

const AutoCompletes1 = () => {
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

const AutoCompletes2 = () => {
  const [options, setOptions] = React.useState([]);
  const handleSearch = (value) => {
    setOptions(() => {
      if (!value || value.includes('@')) {
        return [];
      }
      return ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };
  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
    />
  );
};

const { TextArea } = Input;
const AutoCompletes3 = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(
      !value
        ? []
        : [
            {
              value,
            },
            {
              value: value + value,
            },
            {
              value: value + value + value,
            },
          ],
    );
  };
  const handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      options={options}
      style={{
        width: 200,
      }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{
          height: 50,
        }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  );
};

const AutoCompletes4 = () => {
  const options = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];

  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      options={options}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

const Title = (props) => (
  <Flex align="center" justify="space-between">
    {props.title}
    <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
      more
    </a>
  </Flex>
);
const renderItem = (title, count) => ({
  value: title,
  label: (
    <Flex align="center" justify="space-between">
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </Flex>
  ),
});
const AutoCompletes5 = () => {
  const options = [
    {
      label: <Title title="Libraries" />,
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: <Title title="Solutions" />,
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: <Title title="Articles" />,
      options: [renderItem('AntDesign design language', 100000)],
    },
  ];
  
  return (
    <AutoComplete
      popupClassName="certain-category-search-dropdown"
      popupMatchSelectWidth={500}
      style={{
        width: 250,
      }}
      options={options}
      size="large"
    >
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
  );
};

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
const AutoCompletes6 = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const AutoCompletes7 = () => {
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <AutoComplete
        options={options}
        onSearch={(text) => setOptions(getPanelValue(text))}
        status="error"
        style={{
          width: 200,
        }}
      />
      <AutoComplete
        options={anotherOptions}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        status="warning"
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};

const AutoCompletes8 = () => {
  const mockVal = useCallback((str, repeat = 1) => ({
    value: str.repeat(repeat),
  }));

  const [options, setOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Flex vertical gap={12}>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        placeholder="Outlined"
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
      />
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        placeholder="Filled"
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
        variant="filled"
      />
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        placeholder="Borderless"
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
        variant="borderless"
      />
    </Flex>
  );
};

const AutoCompletes9 = () => {
  const mockVal = useCallback((str, repeat = 1) => ({
    value: str.repeat(repeat),
  }));

  const [options, setOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="UnClearable"
        allowClear={false}
      />
      <br />
      <br />
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="Customized clear icon"
        allowClear={{
          clearIcon: <CloseSquareFilled />,
        }}
      />
    </>
  );
};

export default AutoCompletes;
