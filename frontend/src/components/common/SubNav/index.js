import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import './index.scss';

const SubNav = () => {
  return (
    <div className="subnav">
      <NavLink to="/send" className={({ isActive }) => isActive ? "active" : ""}>
        <Button className="button">Send</Button>
      </NavLink>
      <NavLink to="/request" className={({ isActive }) => isActive ? "active" : ""}>
        <Button className="button">Request</Button>
      </NavLink>
      <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>
        <Button className="button">Contacts</Button>
      </NavLink>
      <NavLink to="/more" className={({ isActive }) => isActive ? "active" : ""}>
        <Button className="button">More</Button>
      </NavLink>
    </div>
  );
};

export default SubNav;
