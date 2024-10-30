import React, { useMemo } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import './InvoiceSettings.scss';

const VALIDATOR_RULES = {
  invoiceNumber: [
    {
      required: true,
      message: 'Invoice number cannot be empty',
    },
  ]
};

const parseDueDate = (dateStr) => {
  if (!dateStr) return null;
  return moment(dateStr, 'DD/MM/YY');
};

const disablePastDates = (current) => {
  return current && current < moment().startOf('day');
};

const InvoiceSettings = ({ initialValues, onSubmit }) => {
  const parsedInitialValues = useMemo(() => {
    return {
      ...initialValues,
      dueDate: parseDueDate(initialValues.dueDate),
    };
  }, [initialValues]);

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={parsedInitialValues}
      onFinish={handleSubmit}
      className="invoice-settings-form"
    >
      <div className="inputs">
        <Form.Item
          label="Invoice number"
          name="invoiceNumber"
          rules={VALIDATOR_RULES.invoiceNumber}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Due date"
          name="dueDate"
          extra="If left unselected, the invoice will be made `due on receipt`"
        >
          <DatePicker
            allowClear
            format="DD/MM/YYYY"
            disabledDate={disablePastDates}
            style={{ width: '100%' }}
            size="large"
          />
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

export default InvoiceSettings;
