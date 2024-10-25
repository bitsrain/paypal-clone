import React from 'react';
import { useSelector } from "react-redux";
import { selectDraftPreviewData } from '../../../reducers/invoice_reducer';
import InvoicePreview from '../../common/previews/InvoicePreview';

import './PreviewPanel.scss';


const PreviewPanel = () => {
  const previewData = useSelector(selectDraftPreviewData);

  return (
    <div className="invoice-preview-panel">
      <InvoicePreview invoice={previewData} /> {/* memoize it */}
    </div>
  );  
};

export default PreviewPanel;
