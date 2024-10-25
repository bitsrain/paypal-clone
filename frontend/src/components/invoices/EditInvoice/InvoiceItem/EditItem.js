import React, { useState, useEffect } from 'react';
import { Form, Input, Radio, Button, Select, InputNumber } from 'antd';
import './EditItem.scss';

const { TextArea } = Input;
const { Option } = Select;

// Constants for currency options and validation rules
const CURRENCY_OPTIONS = [
  { label: 'USD', value: 'USD' },
  { label: 'CAD', value: 'CAD' },
  { label: 'EUR', value: 'EUR' },
];

const VALIDATION_RULES = {
  name: [{ required: true, message: 'This field cannot be empty' }],
  quantity: [{ required: true, message: 'This field cannot be empty' }],
  price: [{ required: true, message: 'This field cannot be empty' }],
};

const DEFAULT_VALUES = { type: 'services', quantity: 5, currency: 'USD' };

const EditItem = ({ initialValues = DEFAULT_VALUES, onAdd, onCancel }) => {
  const [form] = Form.useForm();
  const [type, setType] = useState(initialValues.type);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal(initialValues);
    setType(initialValues.type);
  }, [initialValues]);

  // Calculate total in real-time based on Qty/Hours and Rate/Price per unit
  const calculateTotal = (values) => {
    const quantity = values.quantity || 0;
    const price = values.price || 0;
    setTotal(quantity * price);
  };

  // Handle form changes
  const handleFormChange = (_, allValues) => {
    calculateTotal(allValues);
  };

  // Handle form submission
  const onFinish = (values) => {
    onAdd(values); // Trigger the callback with the form values
    // form.resetFields();
  };

  return (
    <div className="invoice-item-edit">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onValuesChange={handleFormChange}
        initialValues={initialValues}
      >
        {/* Goods/Services Toggle */}
        <Form.Item name="type">
          <Radio.Group onChange={(e) => setType(e.target.value)} value={type}>
            <Radio value="goods">Goods</Radio>
            <Radio value="services">Services</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Name Field */}
        <Form.Item name="name" label="Name" rules={VALIDATION_RULES.name}>
          <Input placeholder="Enter name" />
        </Form.Item>

        {/* Quantity/Hours and Price/Rate Fields */}
        <div className="inline-fields">
          <Form.Item
            name="quantity"
            label={type === 'goods' ? 'Qty' : 'Hours'}
            rules={VALIDATION_RULES.quantity}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            name="price"
            label={type === 'goods' ? 'Price per unit' : 'Rate'}
            rules={VALIDATION_RULES.price}
          >
            <InputNumber min={0} step={0.01} />
          </Form.Item>

          {/* Currency Dropdown */}
          <Form.Item name="currency" label="Currency">
            <Select>
              {CURRENCY_OPTIONS.map((currency) => (
                <Option key={currency.value} value={currency.value}>
                  {currency.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        {/* Tax, Discount, and Total Section */}
        <div className="tax-total-section">
          <div className="tax-discount-section">
            <a href="#">+ Add tax, discount, date</a>
          </div>
          <div className="total-section">
            <span>Total: ${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Description Field with Character Counter */}
        <Form.Item
          name="description"
          label="Description (Optional)"
        >
          <TextArea
            rows={4}
            maxLength={400}
            placeholder="Enter description"
            className="description-input"
            showCount
          />
        </Form.Item>

        {/* Form Buttons */}
        <Form.Item>
          <div className="form-buttons">
            <Button onClick={onCancel} className="cancel-btn">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" className="add-btn">
              Add
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditItem;
