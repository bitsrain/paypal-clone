import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash.debounce';
import { PlusOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import './index.scss';

const { Option } = Select;

const UserSearchInput = ({ showIcon = false, placeholder = 'Contact name or email', onSelect }) => {
  const isInitialMount = useRef(true);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (isInitialMount.current) {
      // Skip the effect on the initial mount
      isInitialMount.current = false;
    } else {
      onSelect(selectedUser);
    }
  }, [selectedUser]);

  // Define the debounced fetch function using useCallback to memoize it
  const debouncedFetchUsers = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery.trim() === '') {
        setUsers([]); // Clear users when input is empty
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`/users/search?query=${searchQuery}`);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }, 1000), // 1000ms debounce delay
    []
  );

  // Handle input change and call debounced function
  const handleInputChange = (value) => {
    setQuery(value);
    if (value === '') {
      setUsers([]); // Clear users when input is cleared
    } else {
      debouncedFetchUsers(value); // Call the debounced version of the fetch
    }
  };

  // Handle user selection
  const handleUserSelect = (value) => {
    const selectedUser = users.find((user) => user.id === value); // Use the ID to find the full user object
    setSelectedUser(selectedUser);
    setQuery(selectedUser.full_name); // Set the selected user's full name in the input field
  };

  // Clear the selected user
  const handleClearSelection = () => {
    setSelectedUser(null);
    setQuery('');
    setUsers([]); // Clear the users list when the input is cleared
  };

  return (
    <div className="user-search-input">
      {selectedUser ? (
        <div className="selected-user">
          <div className="user-info">
            <span className="user-fullname">{selectedUser.full_name}</span>
            <span className="user-email">{selectedUser.email}</span>
          </div>
          <div className="user-actions">
            <CloseOutlined className="icon" onClick={handleClearSelection} />
          </div>
        </div>
      ) : (
        <Select
          showSearch
          value={query || undefined} // Ensure query is correctly linked to the value
          placeholder={placeholder} // Fix placeholder text
          style={{ width: '100%', marginBottom: '20px', height: '48px', fontSize: '16px' }} // Match input size to selected state
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={handleInputChange}
          {
            ...(
              showIcon ? { prefixIcon: <SearchOutlined /> } : {}
            )
          }
          notFoundContent={loading ? <Spin /> : 'No users found'}
          onSelect={handleUserSelect} // Handle selection of a user
          dropdownRender={(menu) => (
            <>
              <div className="create-new-option">
                <PlusOutlined />
                <span>Create new customer</span>
              </div>
              {menu}
            </>
          )}
          dropdownClassName="user-search-input__dropdown"
        >
          {users.map((user) => (
            <Option key={user.id} value={user.id}> {/* Use ID as the value */}
              <div className="user-option">
                <span className="user-fullname">{user.full_name}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default UserSearchInput;
