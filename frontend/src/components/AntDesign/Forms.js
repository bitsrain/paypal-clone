import React, { useState, useEffect, useRef } from 'react';
import {
  Button, Divider, Flex, Space, Tooltip, Card,
  Dropdown, Select, Form, Input, Radio, Tag, Typography,
  Mentions, Row, Col,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  InputNumber,
  Rate,
  Slider,
  Switch,
  TreeSelect, Modal,
  Upload, TimePicker,
  Segmented, Alert, AutoComplete,
  message, theme,
} from 'antd';
import dayjs from 'dayjs';
import { CloseOutlined, UploadOutlined, LockOutlined, InboxOutlined, SmileOutlined, DownOutlined, UserOutlined, PlusOutlined, InfoCircleOutlined  } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Forms = () => (
  <main>
    <Card><h3>Forms 1 - Basic Usage</h3><Forms1 /></Card>
    <Card><h3>Forms 2 - Form methods</h3><Forms2 /></Card>
    <Card><h3>Forms 3 - Form Layout</h3><Forms3 /></Card>
    <Card><h3>Forms 4 - Form mix layout</h3><Forms4 /></Card>
    <Card><h3>Forms 5 - Form disabled</h3><Forms5 /></Card>
    <Card><h3>Forms 6 - Form variants</h3><Forms6 /></Card>
    <Card><h3>Forms 7 - Required style</h3><Forms7 /></Card>
    <Card><h3>Forms 8 - Form size</h3><Forms8 /></Card>
    <Card><h3>Forms 9 - label can wrap</h3><Forms9 /></Card>
    <Card><h3>Forms 10 - No block rule</h3><Forms10 /></Card>
    <Card><h3>Forms 11 - Watch Hooks</h3><Forms11 /></Card>
    <Card><h3>Forms 12 - Validate Trigger</h3><Forms12 /></Card>
    <Card><h3>Forms 13 - Validate Only</h3><Forms13 /></Card>
    <Card><h3>Forms 14 - Path Prefix</h3><Forms14 /></Card>
    <Card><h3>Forms 15 - Dynamic Form Item</h3><Forms15 /></Card>
    <Card><h3>Forms 16 - Dynamic Form nest Items</h3><Forms16 /></Card>
    <Card><h3>Forms 17 - Complex Dynamic Form Item</h3><Forms17 /></Card>
    <Card><h3>Forms 18 - Nest</h3><Forms18 /></Card>
    <Card><h3>Forms 19 - complex form control</h3><Forms19 /></Card>
    <Card><h3>Forms 20 - Customized Form Controls</h3><Forms20 /></Card>
    <Card><h3>Forms 21 - Store Form Data into Upper Component</h3><Forms21 /></Card>
    <Card><h3>Forms 22 - Control between forms</h3><Forms22 /></Card>
    <Card><h3>Forms 23 - Inline Login Form</h3><Forms23 /></Card>
    <Card><h3>Forms 24 - Login Form</h3><Forms24 /></Card>
    <Card><h3>Forms 25 - Registration</h3><Forms25 /></Card>
    <Card><h3>Forms 26 - Advanced search</h3><Forms26 /></Card>
    <Card><h3>Forms 27 - Form in Modal to Create</h3><Forms27 /></Card>
    <Card><h3>Forms 28 - Time-related Controls</h3><Forms28 /></Card>
    <Card><h3>Forms 29 - Handle Form Data Manually</h3><Forms29 /></Card>
    <Card><h3>Forms 30 - Customized Validation</h3><Forms30 /></Card>
    <Card><h3>Forms 31 - Dynamic Rules</h3><Forms31 /></Card>
    <Card><h3>Forms 32 - Dependencies</h3><Forms32 /></Card>
    <Card><h3>Forms 33 - getValueProps + normalize</h3><Forms33 /></Card>
    <Card><h3>Forms 34 - Slide to error field</h3><Forms34 /></Card>
    <Card><h3>Forms 35 - Other Form Controls</h3><Forms35 /></Card>
  </main>
);

const onFinish1 = (values) => {
  console.log('Success:', values);
};
const onFinishFailed1 = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Forms1 = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish1}
    onFinishFailed={onFinishFailed1}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const layout2 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout2 = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Forms2 = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form
      {...layout2}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout2}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const Forms3 = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

const Forms4 = () => (
  <>
    <Form
      name="layout-multiple-horizontal"
      layout="horizontal"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item
        label="horizontal"
        name="horizontal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="vertical"
        label="vertical"
        name="vertical"
        rules={[
          {
            required: true,
          },
        ]}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
      >
        <Input />
      </Form.Item>
    </Form>
    <br />
    <Form
      name="layout-multiple-vertical"
      layout="vertical"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
    >
      <Form.Item
        label="vertical"
        name="vertical"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="horizontal"
        label="horizontal"
        name="horizontal"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  </>
);

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Forms5 = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
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
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
        <Form.Item label="Rate">
          <Rate />
        </Form.Item>
      </Form>
    </>
  );
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const Forms6 = () => {
  const [componentVariant, setComponentVariant] = useState('filled');
  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };
  return (
    <Form
      {...formItemLayout}
      onValuesChange={onFormVariantChange}
      variant={componentVariant}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        variant: componentVariant,
      }}
    >
      <Form.Item label="Form variant" name="variant">
        <Segmented options={['outlined', 'filled', 'borderless']} />
      </Form.Item>

      <Form.Item
        label="Input"
        name="Input"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="InputNumber"
        name="InputNumber"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Mentions />
      </Form.Item>

      <Form.Item
        label="Select"
        name="Select"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Select />
      </Form.Item>

      <Form.Item
        label="Cascader"
        name="Cascader"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Cascader />
      </Form.Item>

      <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <TreeSelect />
      </Form.Item>

      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);
const Forms7 = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
    >
      <Form.Item label="Required Mark" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value>Default</Radio.Button>
          <Radio.Button value="optional">Optional</Radio.Button>
          <Radio.Button value={false}>Hidden</Radio.Button>
          <Radio.Button value="customize">Customize</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

const Forms8 = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
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
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

const Forms9 = () => (
  <Form
    name="wrap"
    labelCol={{
      flex: '110px',
    }}
    labelAlign="left"
    labelWrap
    wrapperCol={{
      flex: 1,
    }}
    colon={false}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Normal label"
      name="username"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="A super long label text"
      name="password"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const Forms10 = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="url"
        label="URL"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const Forms11 = () => {
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  // The selector is static and does not support closures.
  const customValue = Form.useWatch((values) => `name: ${values.name || ''}`, form);
  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name (Watch to trigger rerender)">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item>
      </Form>

      <Typography>
        <pre>Name Value: {nameValue}</pre>
        <pre>Custom Value: {customValue}</pre>
      </Typography>
    </>
  );
};

const Forms12 = () => (
  <Form
    name="trigger"
    style={{
      maxWidth: 600,
    }}
    layout="vertical"
    autoComplete="off"
  >
    <Alert message="Use 'max' rule, continue type chars to see it" />

    <Form.Item
      hasFeedback
      label="Field A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[
        {
          max: 3,
        },
      ]}
    >
      <Input placeholder="Validate required onBlur" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateDebounce={1000}
      rules={[
        {
          max: 3,
        },
      ]}
    >
      <Input placeholder="Validate required debounce after 1s" />
    </Form.Item>

    <Form.Item
      hasFeedback
      label="Field C"
      name="field_c"
      validateFirst
      rules={[
        {
          max: 6,
        },
        {
          max: 3,
          message: 'Continue input to exceed 6 chars',
        },
      ]}
    >
      <Input placeholder="Validate one by one" />
    </Form.Item>
  </Form>
);

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
const Forms13 = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}>Submit</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const MyFormItemContext = React.createContext([]);
function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const Forms14 = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="firstName" label="First Name">
            <Input />
          </MyFormItem>
          <MyFormItem name="lastName" label="Last Name">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>

        <MyFormItem name="age" label="Age">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

const formItemLayout15 = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};
const Forms15 = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  return (
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 passengers'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout15 : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passengers' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    style={{
                      width: '60%',
                    }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '60%',
                }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{
                  width: '60%',
                  marginTop: '20px',
                }}
                icon={<PlusOutlined />}
              >
                Add field at head
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const onFinish16 = (values) => {
  console.log('Received values of form:', values);
};
const Forms16 = () => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish16}
    style={{
      maxWidth: 600,
    }}
    autoComplete="off"
  >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'first']}
                rules={[
                  {
                    required: true,
                    message: 'Missing first name',
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'last']}
                rules={[
                  {
                    required: true,
                    message: 'Missing last name',
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const Forms17 = () => {
  const [form] = Form.useForm();
  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      form={form}
      name="dynamic_form_complex"
      style={{
        maxWidth: 600,
      }}
      autoComplete="off"
      initialValues={{
        items: [{}],
      }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div
            style={{
              display: 'flex',
              rowGap: 16,
              flexDirection: 'column',
            }}
          >
            {fields.map((field) => (
              <Card
                size="small"
                title={`Item ${field.name + 1}`}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="Name" name={[field.name, 'name']}>
                  <Input />
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label="List">
                  <Form.List name={[field.name, 'list']}>
                    {(subFields, subOpt) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          rowGap: 16,
                        }}
                      >
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, 'first']}>
                              <Input placeholder="first" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'second']}>
                              <Input placeholder="second" />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add()} block>
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>

      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
};
const Forms18 = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          type: 'number',
          min: 0,
          max: 99,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const onFinish19 = (values) => {
  console.log('Received values of form: ', values);
};
const Forms19 = () => (
  <Form
    name="complex-form"
    onFinish={onFinish19}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Username">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input
            style={{
              width: 160,
            }}
            placeholder="Please input"
          />
        </Form.Item>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[
            {
              required: true,
              message: 'Street is required',
            },
          ]}
        >
          <Input
            style={{
              width: '50%',
            }}
            placeholder="Input street"
          />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item
      label="BirthDate"
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        name="year"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
        }}
      >
        <Input placeholder="Input birth year" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[
          {
            required: true,
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          margin: '0 8px',
        }}
      >
        <Input placeholder="Input birth month" />
      </Form.Item>
    </Form.Item>
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const PriceInput = (props) => {
  const { id, value = {}, onChange } = props;
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState('rmb');
  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };
  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({
      number: newNumber,
    });
  };
  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({
      currency: newCurrency,
    });
  };
  return (
    <span id={id}>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{
          width: 100,
        }}
      />
      <Select
        value={value.currency || currency}
        style={{
          width: 80,
          margin: '0 8px',
        }}
        onChange={onCurrencyChange}
      >
        <Option value="rmb">RMB</Option>
        <Option value="dollar">Dollar</Option>
      </Select>
    </span>
  );
};
const Forms20 = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };
  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const { Paragraph } = Typography;
const CustomizedForm = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[
        {
          required: true,
          message: 'Username is required!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
);
const Forms21 = () => {
  const [fields, setFields] = useState([
    {
      name: ['username'],
      value: 'Ant Design',
    },
  ]);
  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <Paragraph
        style={{
          maxWidth: 440,
          marginTop: 24,
        }}
      >
        <pre
          style={{
            border: 'none',
          }}
        >
          {JSON.stringify(fields, null, 2)}
        </pre>
      </Paragraph>
    </>
  );
};

const layout22 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};
const ModalForm = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal title="Basic Drawer" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="name"
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="User Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const Forms22 = () => {
  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };
  const hideUserModal = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({
            users: [...users, values],
          });
          setOpen(false);
        }
      }}
    >
      <Form
        {...layout22}
        name="basicForm"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="group"
          label="Group Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Create a hidden field to make Form instance record this */}
        <Form.Item name="users" noStyle />

        <Form.Item
          label="User List"
          shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }) => {
            const users = getFieldValue('users') || [];
            return users.length ? (
              <Flex vertical gap={8}>
                {users.map((user) => (
                  <Space key={user.name}>
                    <Avatar icon={<UserOutlined />} />
                    {`${user.name} - ${user.age}`}
                  </Space>
                ))}
              </Flex>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            Add User
          </Button>
        </Form.Item>
      </Form>

      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};

const Forms23 = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

const Forms24 = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="">Register now!</a>
      </Form.Item>
    </Form>
  );
};

const residences = [
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
const formItemLayout25 = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Forms25 = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout25}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="donation"
        label="Donation"
        rules={[
          {
            required: true,
            message: 'Please input donation amount!',
          },
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: 'Please input website!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[
          {
            required: true,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          {i % 3 !== 1 ? (
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          ) : (
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Select something!',
                },
              ]}
              initialValue="1"
            >
              <Select>
                <Option value="1">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Option>
                <Option value="2">222</Option>
              </Select>
            </Form.Item>
          )}
        </Col>,
      );
    }
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <div
        style={{
          textAlign: 'right',
        }}
      >
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Collapse
          </a>
        </Space>
      </div>
    </Form>
  );
};
const Forms26 = () => {
  const { token } = theme.useToken();
  const listStyle = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <>
      <AdvancedSearchForm />
      <div style={listStyle}>Search Result List</div>
    </>
  );
};

const Forms27 = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Collection
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{
          autoFocus: true,
          htmlType: 'submit',
        }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{
              modifier: 'public',
            }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </>
  );
};

const formItemLayout28 = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const onFinish28 = (fieldsValue) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue['range-picker'];
  const rangeTimeValue = fieldsValue['range-time-picker'];
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
    'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
    'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    'range-time-picker': [
      rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    ],
    'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
  };
  console.log('Received values of form: ', values);
};
const Forms28 = () => (
  <Form
    name="time_related_controls"
    {...formItemLayout28}
    onFinish={onFinish28}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item name="date-picker" label="DatePicker" {...config}>
      <DatePicker />
    </Form.Item>
    <Form.Item name="date-time-picker" label="DatePicker[showTime]" {...config}>
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="month-picker" label="MonthPicker" {...config}>
      <DatePicker picker="month" />
    </Form.Item>
    <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
      <RangePicker />
    </Form.Item>
    <Form.Item name="range-time-picker" label="RangePicker[showTime]" {...rangeConfig}>
      <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="time-picker" label="TimePicker" {...config}>
      <TimePicker />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const validatePrimeNumber = (number) => {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
};
const formItemLayout29 = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};
const tips =
  'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
const Forms29 = () => {
  const [number, setNumber] = useState({
    value: 11,
  });
  const onNumberChange = (value) => {
    setNumber({
      ...validatePrimeNumber(value),
      value: value,
    });
  };
  return (
    <Form
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        {...formItemLayout29}
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <InputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
      </Form.Item>
    </Form>
  );
};

const formItemLayout30 = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const Forms30 = () => (
  <Form
    {...formItemLayout30}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </Form.Item>

    <Form.Item label="Warning" validateStatus="warning">
      <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input placeholder="I'm the content" id="success" />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input placeholder="Warning" id="warning2" />
    </Form.Item>

    <Form.Item
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error2" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <DatePicker
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <TimePicker
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <DatePicker.RangePicker
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Select placeholder="I'm Select" allowClear>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="error"
      help="Something breaks the rule."
    >
      <Cascader
        placeholder="I'm Cascader"
        options={[
          {
            value: 'xx',
            label: 'xx',
          },
        ]}
        allowClear
      />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning" help="Need to be checked">
      <TreeSelect
        placeholder="I'm TreeSelect"
        treeData={[
          {
            value: 'xx',
            label: 'xx',
          },
        ]}
        allowClear
      />
    </Form.Item>

    <Form.Item
      label="inline"
      style={{
        marginBottom: 0,
      }}
    >
      <Form.Item
        validateStatus="error"
        help="Please select right date"
        style={{
          display: 'inline-block',
          width: 'calc(50% - 12px)',
        }}
      >
        <DatePicker />
      </Form.Item>
      <span
        style={{
          display: 'inline-block',
          width: '24px',
          lineHeight: '32px',
          textAlign: 'center',
        }}
      >
        -
      </span>
      <Form.Item
        style={{
          display: 'inline-block',
          width: 'calc(50% - 12px)',
        }}
      >
        <DatePicker />
      </Form.Item>
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input allowClear placeholder="with allowClear" />
    </Form.Item>

    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input.Password placeholder="with input password" />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Input.Password allowClear placeholder="with input password and allowClear" />
    </Form.Item>

    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input.OTP />
    </Form.Item>
    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input.OTP />
    </Form.Item>

    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Input.OTP />
    </Form.Item>

    <Form.Item label="Fail" validateStatus="error" hasFeedback>
      <Mentions />
    </Form.Item>

    <Form.Item label="Fail" validateStatus="error" hasFeedback help="Should have something">
      <Input.TextArea allowClear showCount />
    </Form.Item>
  </Form>
);

const formItemLayout31 = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};
const Forms31 = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);
  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <Form
      form={form}
      name="dynamic_rule"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        {...formItemLayout31}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="nickname"
        label="Nickname"
        rules={[
          {
            required: checkNick,
            message: 'Please input your nickname',
          },
        ]}
      >
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Checkbox checked={checkNick} onChange={onCheckboxChange}>
          Nickname is required
        </Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
    </Form>
  );
};

const Forms32 = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dependencies"
      autoComplete="off"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
    >
      <Alert message=" Try modify `Password2` and then modify `Password`" type="info" showIcon />

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Field */}
      <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      {/* Render Props */}
      <Form.Item noStyle dependencies={['password2']}>
        {() => (
          <Typography>
            <p>
              Only Update when <code>password2</code> updated:
            </p>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};

const dateTimestamp = dayjs('2024-01-01').valueOf();
const onFinish33 = (values) => {
  console.log('Success:', values);
};
const Forms33 = () => (
  <Form
    name="getValueProps"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      date: dateTimestamp,
    }}
    onFinish={onFinish33}
    autoComplete="off"
  >
    <Form.Item
      label="Date"
      name="date"
      rules={[
        {
          required: true,
        },
      ]}
      getValueProps={(value) => ({
        value: value && dayjs(Number(value)),
      })}
      normalize={(value) => value && `${dayjs(value).valueOf()}`}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

const Forms34 = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      scrollToFirstError
      style={{
        paddingBlock: 32,
      }}
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
    >
      <Form.Item
        wrapperCol={{
          offset: 6,
        }}
      >
        <Button onClick={() => form.scrollToField('bio')}>Scroll to Bio</Button>
      </Form.Item>

      <Form.Item
        name="username"
        label="UserName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Occupation" name="occupation">
        <Select
          options={[
            {
              label: 'Designer',
              value: 'designer',
            },
            {
              label: 'Developer',
              value: 'developer',
            },
            {
              label: 'Product Manager',
              value: 'product-manager',
            },
          ]}
        />
      </Form.Item>

      <Form.Item name="motto" label="Motto">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="bio"
        label="Bio"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea rows={6} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
        }}
      >
        <Flex gap="small">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

const formItemLayout35 = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile35 = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish35 = (values) => {
  console.log('Received values of form: ', values);
};
const Forms35 = () => (
  <Form
    name="validate_other"
    {...formItemLayout35}
    onFinish={onFinish35}
    initialValues={{
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
      'color-picker': null,
    }}
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item label="Plain Text">
      <span className="ant-form-text">China</span>
    </Form.Item>
    <Form.Item
      name="select"
      label="Select"
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your country!',
        },
      ]}
    >
      <Select placeholder="Please select a country">
        <Option value="china">China</Option>
        <Option value="usa">U.S.A</Option>
      </Select>
    </Form.Item>

    <Form.Item
      name="select-multiple"
      label="Select[multiple]"
      rules={[
        {
          required: true,
          message: 'Please select your favourite colors!',
          type: 'array',
        },
      ]}
    >
      <Select mode="multiple" placeholder="Please select favourite colors">
        <Option value="red">Red</Option>
        <Option value="green">Green</Option>
        <Option value="blue">Blue</Option>
      </Select>
    </Form.Item>

    <Form.Item label="InputNumber">
      <Form.Item name="input-number" noStyle>
        <InputNumber min={1} max={10} />
      </Form.Item>
      <span
        className="ant-form-text"
        style={{
          marginInlineStart: 8,
        }}
      >
        machines
      </span>
    </Form.Item>

    <Form.Item name="switch" label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>

    <Form.Item name="slider" label="Slider">
      <Slider
        marks={{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }}
      />
    </Form.Item>

    <Form.Item name="radio-group" label="Radio.Group">
      <Radio.Group>
        <Radio value="a">item 1</Radio>
        <Radio value="b">item 2</Radio>
        <Radio value="c">item 3</Radio>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="radio-button"
      label="Radio.Button"
      rules={[
        {
          required: true,
          message: 'Please pick an item!',
        },
      ]}
    >
      <Radio.Group>
        <Radio.Button value="a">item 1</Radio.Button>
        <Radio.Button value="b">item 2</Radio.Button>
        <Radio.Button value="c">item 3</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item name="checkbox-group" label="Checkbox.Group">
      <Checkbox.Group>
        <Row>
          <Col span={8}>
            <Checkbox
              value="A"
              style={{
                lineHeight: '32px',
              }}
            >
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="B"
              style={{
                lineHeight: '32px',
              }}
              disabled
            >
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="C"
              style={{
                lineHeight: '32px',
              }}
            >
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="D"
              style={{
                lineHeight: '32px',
              }}
            >
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="E"
              style={{
                lineHeight: '32px',
              }}
            >
              E
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox
              value="F"
              style={{
                lineHeight: '32px',
              }}
            >
              F
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>

    <Form.Item name="rate" label="Rate">
      <Rate />
    </Form.Item>

    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra="longgggggggggggggggggggggggggggggggggg"
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item label="Dragger">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile35} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="color-picker"
      label="ColorPicker"
      rules={[
        {
          required: true,
          message: 'color is required!',
        },
      ]}
    >
      <ColorPicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        span: 12,
        offset: 6,
      }}
    >
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
  </Form>
);

export default Forms;
