import React, { useRef, useEffect, useState, useCallback } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dropdown, Menu, Drawer } from 'antd';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import InvoiceService from '../../../../services/invoice_service';
import { updateDraft } from '../../../../actions/invoice_actions';
import './index.scss';
import InvoiceSettings from './InvoiceSettings';

const moreActionsMenu = (
  <Menu>
    <Menu.Item key="1">Share link to invoice</Menu.Item>
    <Menu.Item key="2">Save draft</Menu.Item>
    <Menu.Item key="3">Edit business info</Menu.Item>
    <Menu.Item key="4">Edit or add logo</Menu.Item>
    <Menu.Item key="5">Apply template</Menu.Item>
    <Menu.Item key="6">Save template</Menu.Item>
  </Menu>
);

const parseDueDate = dueDate => {
  if (!dueDate) return null;
  return dueDate.format('DD/MM/YY');
};

const InvoiceToolbar = ({ onSend }) => {
  const today = useRef(moment().format('DD/MM/YY'));
  const dispatch = useDispatch();
  const invoice = useSelector(state => state.invoice.draft);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // UI
  const handleOpenSettings = useCallback(() => {
    setSettingsOpen(true);
  });
  const handleCloseSettings = useCallback(() => {
    setSettingsOpen(false);
  });

  useEffect(() => {
    const fetchInvoiceNumber = async () => {
      try {
        const invoiceNumber = await InvoiceService.getInvoiceNumberSuggestion();
        dispatch(updateDraft({ invoiceNumber }));
      } catch (err) {
        console.log('Error while fetching invoice number', err);
      }
    };

    fetchInvoiceNumber();
  }, []);

  const handleSettingsSave = (values) => {
    dispatch(updateDraft({
      invoiceNumber: values.invoiceNumber,
      dueDate: parseDueDate(values.dueDate),
    }));

    setSettingsOpen(false);
  };

  return (
    <div className="invoice-toolbar">
      <div className="content-container">
        <div className="invoice-info">
          <Button type="link" className="back-button">
            <LeftOutlined />
          </Button>
          <div className="invoice-details">
            <h2>Invoice No. {invoice?.invoiceNumber}</h2>
            <span className="invoice-meta">
              Date: {today.current} • Due: {invoice?.dueDate || 'On receipt'}{' '}
              <Button type="link" className="edit-link" onClick={handleOpenSettings}>
                Edit
              </Button>
            </span>
          </div>
        </div>

        <div className="actions">
          <Dropdown overlay={moreActionsMenu} trigger={['click']}>
            <Button type="default" className="more-actions-btn">
              More actions <DownOutlined />
            </Button>
          </Dropdown>
          <Button
            type="primary"
            className="send-btn"
            onClick={onSend}
            disabled={!invoice?.recipient || !invoice?.items?.length}
          >
            Send
          </Button>
        </div>
      </div>

      <Drawer
        title={<div style={{ textAlign: 'center' }}>Invoice settings</div>}
        placement="right"
        width={450}
        open={settingsOpen}
        onClose={handleCloseSettings}
      >
        {settingsOpen && (
          <InvoiceSettings
            initialValues={invoice}
            onSubmit={handleSettingsSave}
          />
        )} 
      </Drawer>
    </div>
  );
};

export default InvoiceToolbar;
