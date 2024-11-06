import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.scss';

const AntDesignHome = () => (
  <>
    <h1>Ant Design components helper</h1>
    <div className="antd-guide">
      <nav>
        <b>General</b>
        <ul>
          <li><Link to="/antd/buttons">Button</Link></li>
          <li><Link to="/antd/float-buttons">FloatButton</Link></li>
          <li><Link to="/antd/icons">Icon</Link></li>
          <li><Link to="/antd/typographies">Typography</Link></li>
        </ul>
        <b>Data Entry</b>
        <ul>
          <li><Link to="/antd/auto-completes">AutoComplete</Link></li>
          <li><Link to="/antd/cascaders">Cascader</Link></li>
          <li><Link to="/antd/checkboxes">Checkbox</Link></li>
          <li><Link to="/antd/date-pickers">DatePicker</Link></li>
          <li><Link to="/antd/forms">Form</Link></li>
          <li><Link to="/antd/inputs">Input</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  </>
);

export default AntDesignHome;
