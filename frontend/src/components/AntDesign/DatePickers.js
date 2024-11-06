import React, { useState } from 'react';
import {
  Flex, Radio, Space, Card, Typography,
  DatePicker, TimePicker, Select, theme,
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const DatePickers = () => (
  <main>
    <Card><h3>DatePickers 1 (Basic)</h3><DatePickers1 /></Card>
    <Card><h3>DatePickers 2 (Range Picker)</h3><DatePickers2 /></Card>
    <Card><h3>DatePickers 3 (Multiple)</h3><DatePickers3 /></Card>
    <Card><h3>DatePickers 4 (Switchable picker)</h3><DatePickers4 /></Card>
    <Card><h3>DatePickers 5 (Need Confirm)</h3><DatePickers5 /></Card>
    <Card><h3>DatePickers 6 (Choose Time)</h3><DatePickers6 /></Card>
    <Card><h3>DatePickers 7 (Date Format)</h3><DatePickers7 /></Card>
    <Card><h3>DatePickers 8 (Disabled Date & Time)</h3><DatePickers8 /></Card>
    <Card><h3>DatePickers 9 (Mask Format)</h3><DatePickers9 /></Card>
    <Card><h3>DatePickers 10 (Select range dates)</h3><DatePickers10 /></Card>
    <Card><h3>DatePickers 11 (Disabled)</h3><DatePickers11 /></Card>
    <Card><h3>DatePickers 12 (Extra Footer)</h3><DatePickers12 /></Card>
    <Card><h3>DatePickers 13 (Allow empty)</h3><DatePickers13 /></Card>
    <Card><h3>DatePickers 14 (Customized Cell Rendering)</h3><DatePickers14 /></Card>
    <Card><h3>DatePickers 15 (Preset Ranges)</h3><DatePickers15 /></Card>
    <Card><h3>DatePickers 16 (Size)</h3><DatePickers16 /></Card>
    <Card><h3>DatePickers 17 (Variants)</h3><DatePickers17 /></Card>
    <Card><h3>DatePickers 18 (Status)</h3><DatePickers18 /></Card>
    <Card><h3>DatePickers 19 (Placement)</h3><DatePickers19 /></Card>
  </main>
);

const DatePickers1 = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  
  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <DatePicker onChange={onChange} picker="week" />
      <DatePicker onChange={onChange} picker="month" />
      <DatePicker onChange={onChange} picker="quarter" />
      <DatePicker onChange={onChange} picker="year" />
    </Space>
  );
};

const { RangePicker } = DatePicker;
const DatePickers2 = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker
      picker="year"
      id={{
        start: 'startInput',
        end: 'endInput',
      }}
      onFocus={(_, info) => {
        console.log('Focus:', info.range);
      }}
      onBlur={(_, info) => {
        console.log('Blur:', info.range);
      }}
    />
  </Space>
);

const defaultValue3 = [dayjs('2000-01-01'), dayjs('2000-01-03'), dayjs('2000-01-05')];
const DatePickers3 = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Flex vertical gap="small">
      <DatePicker
        multiple
        onChange={onChange}
        maxTagCount="responsive"
        defaultValue={defaultValue3}
        size="small"
      />
      <DatePicker multiple onChange={onChange} maxTagCount="responsive" defaultValue={defaultValue3} />
      <DatePicker
        multiple
        onChange={onChange}
        maxTagCount="responsive"
        defaultValue={defaultValue3}
        size="large"
      />
    </Flex>
  );
};

const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const DatePickers4 = () => {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};

const onChange5 = (date, dateString) => {
  console.log(date, dateString);
};
const DatePickers5 = () => <DatePicker onChange={onChange5} needConfirm />;

const onOk = (value) => {
  console.log('onOk: ', value);
};
const DatePickers6 = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      showTime
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
    <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="YYYY-MM-DD HH:mm"
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
  </Space>
);

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;
const DatePickers7 = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);

const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const DatePickers8 = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);

const onChange9 = (date, dateString) => {
  console.log(date, dateString);
};
const DatePickers9 = () => (
  <Space direction="vertical">
    <DatePicker
      format={{
        format: 'YYYY-MM-DD',
        type: 'mask',
      }}
      onChange={onChange9}
    />
    <DatePicker
      format={{
        format: 'YYYY-MM-DD HH:mm:ss',
        type: 'mask',
      }}
      onChange={onChange9}
    />
  </Space>
);

const getYearMonth = (date) => date.year() * 12 + date.month();
// Disabled 7 days from the selected date
const disabled7DaysDate = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-6, 'days');
    const maxDate = from.add(6, 'days');
    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();
      case 'month':
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
      default:
        return Math.abs(current.diff(from, 'days')) >= 7;
    }
  }
  return false;
};
// Disabled 6 months from the selected date
const disabled6MonthsDate = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-5, 'months');
    const maxDate = from.add(5, 'months');
    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();
      default:
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
    }
  }
  return false;
};
const DatePickers10 = () => (
  <Space direction="vertical">
    <Typography.Title level={5}>7 days range</Typography.Title>
    <RangePicker disabledDate={disabled7DaysDate} />

    <Typography.Title level={5}>6 months range</Typography.Title>
    <RangePicker disabledDate={disabled6MonthsDate} picker="month" />
  </Space>
);

const dateFormat11 = 'YYYY-MM-DD';
const DatePickers11 = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015-06-06', dateFormat11)} disabled />
    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
    <RangePicker
      defaultValue={[dayjs('2015-06-06', dateFormat11), dayjs('2015-06-06', dateFormat11)]}
      disabled
    />
    <RangePicker
      defaultValue={[dayjs('2019-09-03', dateFormat11), dayjs('2019-11-22', dateFormat11)]}
      disabled={[false, true]}
    />
    <DatePicker
      defaultValue={dayjs('2019-09-03', dateFormat11)}
      minDate={dayjs('2019-06-01', dateFormat11)}
      maxDate={dayjs('2020-06-30', dateFormat11)}
    />
  </Space>
);

const DatePickers12 = () => (
  <Space direction="vertical" size={12}>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
  </Space>
);

const DatePickers13 = () => (
  <DatePicker.RangePicker
    placeholder={['', 'Till Now']}
    allowEmpty={[false, true]}
    onChange={(date, dateString) => {
      console.log(date, dateString);
    }}
  />
);

const DatePickers14 = () => {
  const { token } = theme.useToken();
  const style = {
    border: `1px solid ${token.colorPrimary}`,
    borderRadius: '50%',
  };
  const cellRender = (current, info) => {
    if (info.type !== 'date') {
      return info.originNode;
    }
    if (typeof current === 'number' || typeof current === 'string') {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
        {current.date()}
      </div>
    );
  };
  return (
    <Space size={12} direction="vertical">
      <DatePicker cellRender={cellRender} />
      <DatePicker.RangePicker cellRender={cellRender} />
    </Space>
  );
};

const onChange15 = (date) => {
  if (date) {
    console.log('Date: ', date);
  } else {
    console.log('Clear');
  }
};
const onRangeChange15 = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
];
const DatePickers15 = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      presets={[
        {
          label: 'Yesterday',
          value: dayjs().add(-1, 'd'),
        },
        {
          label: 'Last Week',
          value: dayjs().add(-7, 'd'),
        },
        {
          label: 'Last Month',
          value: dayjs().add(-1, 'month'),
        },
      ]}
      onChange={onChange15}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange15} />
    <RangePicker
      presets={[
        {
          label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
          value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange15}
    />
  </Space>
);

const DatePickers16 = () => {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Space direction="vertical" size={12}>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  );
};

const DatePickers17 = () => (
  <Flex vertical gap={12}>
    <Flex gap={8}>
      <DatePicker placeholder="Outlined" />
      <RangePicker placeholder={['Outlined', '']} />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="Filled" variant="filled" />
      <RangePicker placeholder={['Filled', '']} variant="filled" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="Borderless" variant="borderless" />
      <RangePicker placeholder={['Borderless', '']} variant="borderless" />
    </Flex>
  </Flex>
);

const DatePickers18 = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <DatePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
  </Space>
);

const DatePickers19 = () => {
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
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  );
};

export default DatePickers;
