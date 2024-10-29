import React from 'react';
import { Avatar } from 'antd';
import { genInitials } from '../../utils/generators';

const UserAvatar = ({ name, size = 40 }) => {
  return (
    <Avatar style={{ backgroundColor: '#003087' }} size={size}>
      {genInitials(name)}
    </Avatar>
  );
};

export default React.memo(UserAvatar);
