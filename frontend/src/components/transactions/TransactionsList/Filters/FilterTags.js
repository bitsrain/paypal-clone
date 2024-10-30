import React, { useMemo } from 'react';
import { Flex, Tag } from 'antd';
import { LAST_90_DAYS, DATE_OPTIONS, TRANSACTION_TYPE_OPTIONS, STATUS_OPTIONS } from '../../../../constants/transaction_filters';
import { selectOptionstoMap } from '../../../../utils/transformers';
import './FilterTags.scss';
import { CloseOutlined } from '@ant-design/icons';

const DATE_LABELS = selectOptionstoMap(DATE_OPTIONS);
const TRANSACTION_TYPE_LABELS = selectOptionstoMap(TRANSACTION_TYPE_OPTIONS);
const STATUS_LABELS = selectOptionstoMap(STATUS_OPTIONS);

const FilterTags = ({ filters, onRemove }) => {
  const tags = useMemo(() => {
    const tagArr = [];
    for (let fieldName in filters) {
      const fieldValue = filters[fieldName];
      console.log(fieldName, fieldValue);
      if (!fieldValue) continue;

      let tag;
      if (fieldName === 'date') {
        tag = {
          fieldName,
          text: `Date: ${DATE_LABELS[fieldValue]}`,
          removable: true,
        }
      } else if (fieldName === 'dateRange') {
        tag = {
          fieldName,
          text: `Date: ${fieldValue[0]} - ${fieldValue[1]}`,
          removable: true,
        }
      } else if (fieldName === 'transactionType') {
        tag = {
          fieldName,
          text: `Type: ${TRANSACTION_TYPE_LABELS[fieldValue]}`,
          removable: true,
        }
      } else if (fieldName === 'status') {
        tag = {
          fieldName,
          text: `Status: ${STATUS_LABELS[fieldValue]}`,
          removable: true,
        }
      }

      if (tag) tagArr.push(tag);
    }
    console.log(tagArr);
    return tagArr;
  }, [filters]);

  return (
    <div className="transaction-filter-tags">
      <Flex gap="4px 0" wrap>
        {tags.map((tag, index) => (
          <Tag key={`filter-${index}`} color="#108ee9">
            {tag.text}
            {tag.removable && (
              <CloseOutlined style={{ marginLeft: 10 }} onClick={() => onRemove(tag.fieldName)} />
            )}
          </Tag>
        ))}
      </Flex>
    </div>
  )
};

export default FilterTags;
