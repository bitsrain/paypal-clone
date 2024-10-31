import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LinkButton = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(to);
  });

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default React.memo(LinkButton);
