import React, { useMemo } from 'react';
import moment from 'moment';
import { Form, Select, DatePicker, Button, Typography } from 'antd';
import './FilterForm.scss';
import {
  DATE_OPTIONS, TRANSACTION_TYPE_OPTIONS, STATUS_OPTIONS,
} from '../../../../constants/transaction_filters';

const { Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;

// Utility function to parse date range strings into moment objects
const parseDateRange = (dateRange) => {
  if (!dateRange) return null;
  return dateRange.map((dateStr) => moment(dateStr, 'MM/DD/YYYY'));
};

const VALIDATOR_RULES = {
  dateRange: [
    {
      validator: (_, value) => {
        if (!value) {
          return Promise.resolve();
        }
        return value[0] && value[1]
          ? Promise.resolve()
          : Promise.reject(new Error('Please select both start and end dates'));
      },
    },
  ],
};

const FilterForm = ({ initialValues, onSubmit }) => {
  const parsedInitialValues = useMemo(() => {
    return {
      ...initialValues,
      dateRange: parseDateRange(initialValues.dateRange),
    };
  }, [initialValues]);

  const [form] = Form.useForm();

  const handleValuesChange = (changedValues, allValues) => {
    if (changedValues.date) {
      // Clear dateRange if date is not 'custom'
      form.setFieldsValue({ dateRange: null });
    }
    if (changedValues.dateRange) {
      // Set date to 'custom' if dateRange is selected
      form.setFieldsValue({ date: null });
    }
  };

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={parsedInitialValues}
      onValuesChange={handleValuesChange}
      onFinish={handleSubmit}
      className="filter-form"
    >
      <div className="inputs">
        <Form.Item label="Date" name="date">
          <Select placeholder="Select date range" size="large">
            {DATE_OPTIONS.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Text className="filter-form__custom-date-text">Or choose a custom date range</Text>

        <Form.Item name="dateRange" rules={VALIDATOR_RULES.dateRange}>
          <RangePicker format="DD/MM/YYYY" style={{ width: '100%' }} size="large" />
        </Form.Item>

        <Form.Item label="Transaction Type" name="transactionType">
          <Select placeholder="Select transaction type" size="large">
            {TRANSACTION_TYPE_OPTIONS.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select placeholder="Select status" size="large">
            {STATUS_OPTIONS.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      
      <div className="footer">
        <Button type="primary" htmlType="submit" size="large">
          Apply Filters
        </Button>
      </div>
    </Form>
  );
};

export default FilterForm;
