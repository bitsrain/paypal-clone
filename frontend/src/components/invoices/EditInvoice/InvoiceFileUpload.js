import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Upload, Typography, message, Button, Tag } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import { updateDraft } from '../../../actions/invoice_actions';
import './InvoiceFileUpload.scss';

const { Text } = Typography;

const maxFiles = 5;
const maxFileSizeMB = 4;
const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];

const InvoiceFileUpload = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    dispatch(
      updateDraft({
        attachments: fileList
      })
    );
  }, [fileList]);

  const handleUpload = async ({ file }) => {
    // Check file size
    if (file.size / 1024 / 1024 > maxFileSizeMB) {
      message.error(`${file.name} exceeds the ${maxFileSizeMB}MB file size limit.`);
      return;
    }

    // Check file type
    if (!allowedFileTypes.includes(file.type)) {
      message.error(`${file.name} is not a supported file type.`);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/u/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFileList([...fileList, { name: file.name, url: response.data.url }]);
      message.success(`${file.name} uploaded successfully.`);
    } catch (error) {
      message.error(`${file.name} upload failed.`);
    }
  };

  const handleRemove = (fileName) => {
    setFileList(fileList.filter(file => file.name !== fileName));
  };

  return (
    <div className="invoice-file-upload">
      <h3>Attachments</h3>
      <Upload
        customRequest={handleUpload}
        showUploadList={false}
        fileList={fileList}
        disabled={fileList.length >= maxFiles}
        accept=".jpeg,.jpg,.png,.gif,.pdf" // Restrict file selection
      >
        <Button type="link" className="upload-btn">
          <UploadOutlined />
          Upload files
        </Button>
      </Upload>
      <div className="upload-instructions">JPG GIF PNG PDF | Up to {maxFiles} files, {maxFileSizeMB}MB per file</div>
      <div className="file-list">
        {fileList.map(file => (
          <Tag
            key={file.name}
            closable
            onClose={() => handleRemove(file.name)}
            closeIcon={<CloseOutlined />}
          >
            {file.name}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default InvoiceFileUpload;
