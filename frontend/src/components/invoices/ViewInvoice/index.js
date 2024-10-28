import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';
import InvoicePreview from '../../common/previews/InvoicePreview';
import { load as loadInvoice, pay as payInvoice, clearLoaded } from '../../../actions/invoice_actions';
import { selectLoadedPreviewData, selectLoadedCompositeStatus } from '../../../reducers/invoice_reducer';
import InvoiceActions from './InvoiceActions';
import './index.scss';
import InvoiceTrack from './InvoiceTrack';

const ViewInvioce = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.invoice.loading);
  const loadSuccess = useSelector(state => state.invoice.loadSuccess);
  const previewData = useSelector(selectLoadedPreviewData);
  const [invoiceId, invoiceStatus, invoiceFinalStatus, isReceived] = useSelector(selectLoadedCompositeStatus);

  const paying = useSelector(state => state.invoice.paying);
  const paySuccess = useSelector(state => state.invoice.paySuccess);
  const payError = useSelector(state => state.invoice.payError);
  const handlePay = () => {
    dispatch(payInvoice(invoiceId));
  };

  useEffect(() => {
    dispatch(loadInvoice(id));
    
    return () => {
      dispatch(clearLoaded());
    };
  }, [id]);

  if (!loadSuccess || !previewData) {
    return (
      <div className="view-invoice">
        {loading && <Spin spinning fullscreen />}
      </div>
    );
  }

  return (
    <div className="view-invoice">
      {!!payError && (
        <Alert type="error" showIcon message={payError} />
      )}
      {paying && (
        <Spin spinning fullscreen />
      )}
      {paySuccess && (
        <Alert type="success" showIcon message="Your payment was successful" />
      )}
      <h3>Invoice from {previewData.sender.name}</h3>
      <div className="content">
        <div className="preview-section">
          <InvoicePreview invoice={previewData} showStatus />
        </div>
        <div className="meta-section">
          {invoiceStatus == 'pending' && (
            <InvoiceActions
              data={previewData}
              isReceived={isReceived}
              onPay={handlePay}
            />
          )} 
          {invoiceStatus === 'paid' && (
            <InvoiceTrack data={previewData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewInvioce;
