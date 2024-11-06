import React, { useState } from 'react';
import {
  Button, Divider, Row, Col, Card,
  Checkbox
} from 'antd';

const Checkboxes = () => (
  <main>
    <Card><h3>Checkboxes 1 (Basic)</h3><Checkboxes1 /></Card>
    <Card><h3>Checkboxes 2 (Disabled)</h3><Checkboxes2 /></Card>
    <Card><h3>Checkboxes 3 (Controlled Checkbox)</h3><Checkboxes3 /></Card>
    <Card><h3>Checkboxes 4 (Checkbox Group)</h3><Checkboxes4 /></Card>
    <Card><h3>Checkboxes 5 (Check all)</h3><Checkboxes5 /></Card>
    <Card><h3>Checkboxes 6 (Use with Grid)</h3><Checkboxes6 /></Card>
  </main>
);

const Checkboxes1 = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
};

const Checkboxes2 = () => (
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox indeterminate disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>
);

const Checkboxes3 = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const onChange = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };
  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
  return (
    <>
      <p
        style={{
          marginBottom: '20px',
        }}
      >
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{
            margin: '0 10px',
          }}
          type="primary"
          size="small"
          onClick={toggleDisable}
        >
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </>
  );
};

const Checkboxes4 = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
    },
  ];
  const optionsWithDisabled = [
    {
      label: 'Apple',
      value: 'Apple',
    },
    {
      label: 'Pear',
      value: 'Pear',
    },
    {
      label: 'Orange',
      value: 'Orange',
      disabled: false,
    },
  ];

  return (
    <>
      <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </>
  );
};

const CheckboxGroup = Checkbox.Group;
const Checkboxes5 = () => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};

const Checkboxes6 = () => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <Checkbox.Group
      style={{
        width: '100%',
      }}
      onChange={onChange}
    >
      <Row>
        <Col span={8}>
          <Checkbox value="A">A</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="B">B</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="C">C</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="D">D</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="E">E</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
};

export default Checkboxes;